import React from 'react';

import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import withRoot from '../../components/admin/withRoot';
import MyPaper from '../../components/admin/MyPaper';
import MyAppBar from '../../components/admin/MyAppBar';
import Grid from 'material-ui/Grid';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Button from 'material-ui/Button';
import ModalDialog from '../../components/admin/ModalDialog';

import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

import Avatar1 from '../../img/admin/avatar-1.jpg';

import styles from '../../theme/admin/pages/Invoice';

import Auth from '../../components/Auth';
import Config from '../../Config';
import axios from 'axios';

class Invoice extends React.Component {

    constructor(props) {
        super(props);

        const config = new Config();

        const shopper = JSON.parse(window.localStorage.getItem('shopper'));

        this.state = {
            open:        typeof props.open        !== 'undefined' ? props.open : false,
            id:          typeof props.id          !== 'undefined' ? props.id : 0,
            date:        typeof props.date        !== 'undefined' ? props.date : '',
            transaction: typeof props.transaction !== 'undefined' ? props.transaction : '',
            revenue:     typeof props.revenue     !== 'undefined' ? props.revenue : '',
            commission:  typeof props.commission  !== 'undefined' ? props.commission : '',
            prevBalance: typeof props.prevBalance !== 'undefined' ? props.prevBalance : '',
            newBalance:  typeof props.newBalance  !== 'undefined' ? props.newBalance : '',

            shopperId:      shopper.id,
            shopper:        shopper,
            baseUrl:        config.baseUrl,
            items:          [],
            showLoading:    false,
            message:        ''
        };
        // const data = [
        //     this.createData('2017.07.20', 'Sell $100 Gift Card', '$90', '$9', '$0', '$81'),
        //     this.createData('2017.07.19', 'Drizzle paid commission $976.00', '$90', '$9', '$976.00', '$0'),
        //     this.createData('2017.07.18', 'Sell $100 Gift Card', '$160', '$9', '$0', '$151'),
        //     this.createData('2017.07.17', 'Sell $100 Gift Card', '$90', '$9', '$0', '$81'),
        //     this.createData('2017.07.16', 'Drizzle paid commission $976.00', '$90', '$9', '$976.00', '$0'),
        //     this.createData('2017.07.15', 'Sell $100 Gift Card', '$160', '$9', '$0', '$151'),
        //     this.createData('2017.07.14', 'Sell $100 Gift Card', '$90', '$9', '$0', '$81'),
        //     this.createData('2017.07.13', 'Drizzle paid commission $976.00', '$90', '$9', '$976.00', '$0'),
        //     this.createData('2017.07.12', 'Sell $100 Gift Card', '$160', '$9', '$0', '$151'),
        //     this.createData('2017.07.11', 'Sell $100 Gift Card', '$90', '$9', '$0', '$81'),
        //     this.createData('2017.07.10', 'Drizzle paid commission $976.00', '$90', '$9', '$976.00', '$0'),
        //     this.createData('2017.07.09', 'Sell $100 Gift Card', '$160', '$9', '$0', '$151'),
        // ];
        // this.state.data=data;
        this.createData=this.createData.bind(this);
    }

    componentWillMount() {
        axios.get(this.state.baseUrl + 'gift-card/rest/transaction/0', {
            params: {
                shopperId: this.state.shopperId,
                method: 'LIST'
            }
        })
            .then(response => {
                console.log(response);

                if (typeof response.data.message == 'undefined') {
                    this.setState({
                        items: response.data
                    });
                    this.loadShopper();

                } else {
                    this.setState({
                        message: 'Balance is empty'
                    });
                }
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    showLoading: false
                });
            });
    }

    createData(date, transaction, revenue, commission, prevBalance, newBalance) {
        this.state.id += 1;
        const id = this.state.id;
        return {  id, date, transaction, revenue, commission, prevBalance, newBalance };
    };

    handleClick = (event, date, transaction, revenue, commission, prevBalance, newBalance) => {

        if(date!=='' && transaction!=='' && revenue!=='' && commission!=='' && prevBalance!=='' && newBalance!==''){
            this.setState({
                open: true,
                date: date,
                transaction: transaction,
                revenue: revenue,
                commission: commission,
                prevBalance: prevBalance,
                newBalance: newBalance,
            });
        }
    };

    render(){

        let rowsDetail;

        if(this.state.newBalance!=='$0'){
            rowsDetail = (
                <div>
                    <div className={this.props.classes.dialogRow}>
                        <div className={this.props.classes.param}>
                            revenue
                        </div>
                        <div className={this.props.classes.paramValue}>
                            {this.state.revenue}
                        </div>
                    </div>
                    <div className={this.props.classes.dialogRow}>
                        <div className={this.props.classes.param}>
                            Drizzle Commission
                        </div>
                        <div className={this.props.classes.paramValue}>
                            {this.state.commission}
                        </div>
                    </div>
                </div>
            )
        }

        return(
            <div>
                <MyAppBar
                    title="Invoice"
                />
                <MyPaper title="Namaste, Starbucks" avatar={Avatar1}>
                    <div className={this.props.classes.titleForm}>
                        You can access stripe dashboard for detail statement
                    </div>
                    {/*<Button color="primary" className={this.props.classes.fullWidth} href="/admin/dashboard">Access Stripe Dashboard</Button>*/}
                    <br/>
                    <br/>

                    <div className={this.props.classes.wrapFilter} style={{position: 'relative'}}>
                        <Grid container spacing={0}>
                            <Grid item xs={6}  style={{paddingRight: 14}}>
                                <div className={this.props.classes.WrapStartDate}>
                                    <DayPickerInput placeholder="DD/MM/YYYY" format="DD/MM/YYYY" />
                                </div>
                            </Grid>
                            <Grid item xs={6} style={{paddingLeft: 14}}>
                                <div className={this.props.classes.WrapEndDate}>
                                    <DayPickerInput placeholder="DD/MM/YYYY" format="DD/MM/YYYY" />
                                </div>
                            </Grid>
                        </Grid>
                        <br/>
                        <Table className={this.props.classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>date</TableCell>
                                    <TableCell>balance</TableCell>
                                    <TableCell>more info</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.items.map(item => {
                                    return (
                                        <TableRow key={item[0].id} onClick={event => this.handleClick(event, item[1], item[0].transactionRoute, item[0].transactionValue/100, 0, item[0].prevBalance/100, item[0].newBalance/100)}>
                                            <TableCell>{item[1]}</TableCell>
                                            <TableCell>${item[0].newBalance/100}</TableCell>
                                            <TableCell>{item[0].transactionRoute} ...</TableCell>
                                        </TableRow>
                                    );
                                })}
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
                                    transaction
                                </div>
                                <div className={this.props.classes.paramValue}>
                                    {this.state.transaction}
                                </div>
                            </div>

                            { rowsDetail }

                            <div className={this.props.classes.dialogRow}>
                                <div className={this.props.classes.param}>
                                    Previous Balance
                                </div>
                                <div className={this.props.classes.paramValue}>
                                    {this.state.prevBalance}
                                </div>
                            </div>
                            <div className={this.props.classes.dialogRow}>
                                <div className={this.props.classes.param}>
                                    New Balance
                                </div>
                                <div className={this.props.classes.paramValue}>
                                    {this.state.newBalance}
                                </div>
                            </div>
                        </div>
                    </ModalDialog>
                </MyPaper>
            </div>
        );
    }
}

Invoice.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(Invoice));