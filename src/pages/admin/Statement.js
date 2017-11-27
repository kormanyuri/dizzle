import React from 'react';

import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import withRoot from '../../components/admin/withRoot';
import MyPaper from '../../components/admin/MyPaper';
import MyAppBar from '../../components/admin/MyAppBar';
import Grid from 'material-ui/Grid';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import CircleButton from '../../components/admin/CircleButton';
import ModalDialog from '../../components/admin/ModalDialog';

import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

import Avatar1 from '../../img/admin/avatar-1.jpg';

import styles from '../../theme/admin/pages/Statement';

import Auth from '../../components/Auth';
import Config from '../../Config';
import axios from 'axios';

class Statement extends React.Component {

    constructor(props) {
        super(props);
        const config = new Config();

        this.state = {
            open:    typeof props.open !== 'undefined' ? props.open : false,
            id:      typeof props.id !== 'undefined' ? props.id : 0,
            date:    typeof props.date !== 'undefined' ? props.date : '',
            member:  typeof props.member !== 'undefined' ? props.member : '',
            action:  typeof props.action !== 'undefined' ? props.action : '',
            paid:    typeof props.paid !== 'undefined' ? props.paid : '',
            balance: typeof props.balance !== 'undefined' ? props.balance : '',
            baseUrl: config.baseUrl,
            token:   window.localStorage.getItem('token'),
            data:   [],
            shopper: JSON.parse(window.localStorage.getItem('shopper'))
        };

        // const data = [
        //     this.createData('2017.07.21', 'Jack k.', 'buy $50', '$45', '$45'),
        //     this.createData('2017.07.20', 'Jack k.', 'Spend $50', '$45', '$45'),
        //     this.createData('2017.07.19', 'Jack k.', 'buy $100', '$45', '$45'),
        //     this.createData('2017.07.19', 'Micky D.', 'buy $50', '$45', '$45'),
        //     this.createData('2017.07.21', 'Jack k.', 'buy $50', '$45', '$45'),
        //     this.createData('2017.07.20', 'Jack k.', 'Spend $50', '$45', '$45'),
        //     this.createData('2017.07.19', 'Jack k.', 'buy $100', '$45', '$45'),
        //     this.createData('2017.07.19', 'Micky D.', 'buy $50', '$45', '$45'),
        // ];
        // this.state.data=data;
        // this.createData=this.createData.bind(this);
    }

    componentWillMount(){
        axios.get(this.state.baseUrl + 'shopper-admin/rest/statement-list', {
            params: {
                token: this.state.token
            }
        })
            .then(response => {
                let data = [];
                response.data.items.map(item => {
                    console.log(item);
                    data.push({
                        id:      item[0].id,
                        date:    item[1],
                        member:  item[0].consumer.socialDataProfile.nickname,
                        action:  item[0].transactionRoute,
                        paid:    (item[0].transactionValue/100),
                        balance: item[0].newBalance
                    });
                });

                this.setState({
                    data: data
                });

            })
            .catch(error => {

            });
    }

    createData(date, member, action, paid, balance) {
        this.state.id += 1;
        const id = this.state.id;
        return {  id, date, member, action, paid, balance };
    };

    handleClick = (event, date, member, action, paid, balance) => {

        if(date!=='' && member!=='' && action!=='' && paid!=='' && balance!==''){
            this.setState({
                open: true,
                date: date,
                member: member,
                action: action,
                paid: paid,
                balance: balance,
            });
        }
    };

    render(){

        let items = [<TableRow key="0">
                        <TableCell>Load...</TableCell>
                    </TableRow>];

        if (this.state.data.length > 0) {
            this.state.data.map(n => {
                items.push(<TableRow key={n.id}
                                   onClick={event => this.handleClick(event, n.date, n.member, n.action, n.paid, n.balance)}>
                    <TableCell>{n.date}</TableCell>
                    <TableCell>{n.member}</TableCell>
                    <TableCell>{n.action} ...</TableCell>
                </TableRow>)
            });
        }

        let logo = this.state.shopper.logo;

        if (logo == '') {
            logo = Avatar1;
        } else {
            logo = '/backend/uploads/logos/' + logo
        }

        if (this.state.data.length > 0) {

            return (
                <div>
                    <MyAppBar
                        title="statement"
                    />
                    <MyPaper title={`Namaste, ` + this.state.shopper.name} avatar={logo}>
                        <div className={this.props.classes.titleForm}>Display currency</div>
                        <div className={this.props.classes.wrapFilter} style={{position: 'relative'}}>
                            <Grid container spacing={0}>
                                <Grid item xs={6} style={{paddingRight: 14}}>
                                    <div className={this.props.classes.WrapStartDate}>
                                        <DayPickerInput placeholder="DD/MM/YYYY" format="DD/MM/YYYY"/>
                                    </div>
                                </Grid>
                                <Grid item xs={6} style={{paddingLeft: 14}}>
                                    <div className={this.props.classes.WrapEndDate}>
                                        <DayPickerInput placeholder="DD/MM/YYYY" format="DD/MM/YYYY"/>
                                    </div>
                                </Grid>
                            </Grid>
                            <div className={this.props.classes.wrapInfo}>
                                <CircleButton className={this.props.classes.iconInfo}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="3.48171" height="8.4999788"
                                         viewBox="0 0 3.48171 8.4999788" id="svg2">
                                        <path
                                            d="M2.5 0c-.27 0-.5.097-.694.29-.193.196-.29.43-.29.703 0 .274.097.508.29.702.194.19.424.285.694.285.27 0 .5-.094.69-.285.194-.194.292-.428.292-.702 0-.273-.098-.507-.292-.702C3 .098 2.77 0 2.5 0zm-.915 2.878c-.22 0-.453.042-.7.13-.246.08-.505.18-.776.3L0 3.795c.08-.033.175-.068.285-.104.114-.035.222-.052.33-.052.216 0 .364.038.44.117.077.08.116.22.116.423 0 .11-.013.234-.04.37-.023.134-.053.276-.09.427L.63 6.55c-.037.166-.064.316-.08.45-.017.128-.026.256-.026.382 0 .324.11.593.33.805.224.21.537.313.937.313.26 0 .488-.038.685-.113.197-.072.462-.18.792-.32l.11-.486c-.058.03-.15.065-.276.105-.126.036-.24.053-.34.053-.213 0-.363-.036-.45-.112-.086-.075-.13-.22-.13-.428 0-.083.014-.204.04-.366.028-.16.057-.306.09-.432l.41-1.57c.04-.143.068-.302.082-.474.016-.173.025-.294.025-.362 0-.33-.11-.6-.327-.804-.213-.208-.518-.312-.914-.312z"
                                            fill="#877650"/>
                                    </svg>
                                </CircleButton>
                                <div>tab on exact date to see more <br/>statement details</div>
                            </div>
                            <Table className={this.props.classes.table}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>date</TableCell>
                                        <TableCell>member</TableCell>
                                        <TableCell>action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {items}
                                </TableBody>
                            </Table>
                        </div>
                        <ModalDialog open={this.state.open}>
                            <div>
                                <div className={this.props.classes.dialogRow}>
                                    <div className={this.props.classes.param}>
                                        date
                                    </div>
                                    <div className={this.props.classes.paramValue}>
                                        {this.state.date}
                                    </div>
                                </div>
                                <div className={this.props.classes.dialogRow}>
                                    <div className={this.props.classes.param}>
                                        member
                                    </div>
                                    <div className={this.props.classes.paramValue}>
                                        {this.state.member}
                                    </div>
                                </div>
                                <div className={this.props.classes.dialogRow}>
                                    <div className={this.props.classes.param}>
                                        action
                                    </div>
                                    <div className={this.props.classes.paramValue}>
                                        {this.state.action}
                                    </div>
                                </div>
                                <div className={this.props.classes.dialogRow}>
                                    <div className={this.props.classes.param}>
                                        paid
                                    </div>
                                    <div className={this.props.classes.paramValue}>
                                        {this.state.paid}
                                    </div>
                                </div>
                                <div className={this.props.classes.dialogRow}>
                                    <div className={this.props.classes.param}>
                                        New store Credit balance
                                    </div>
                                    <div className={this.props.classes.paramValue}>
                                        {this.state.balance/100}
                                    </div>
                                </div>
                            </div>
                        </ModalDialog>
                    </MyPaper>
                </div>
            );
        } else {
            return (
                <div></div>
            )
        }
    }
}

Statement.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(Statement));