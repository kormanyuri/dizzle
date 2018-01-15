import React from 'react';

import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import withRoot from '../../components/admin/withRoot';
import MyPaper from '../../components/admin/MyPaper';
import MyAppBar from '../../components/admin/MyAppBar';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import Avatar1 from '../../img/admin/avatar-1.jpg';

import styles from '../../theme/admin/pages/StoreCreditList';

import Auth from '../../components/Auth';
import Config from '../../Config';
import Core from  '../../utils/Core';
import axios from 'axios';

class StoreCreditList extends React.Component {


    constructor(props) {
        super(props);
        const config = new Config();

        this.state = {
            open: typeof props.open !== 'undefined' ? props.open : false,
            id: typeof props.id !== 'undefined' ? props.id : 0,
            member: typeof props.member !== 'undefined' ? props.member : '',
            balance: typeof props.balance !== 'undefined' ? props.balance : '',
            baseUrl: config.baseUrl,
            shopper: JSON.parse(window.localStorage.getItem('shopper')),
            token: window.localStorage.getItem('shopper_token')
        };

        this.state.data=[];
        this.createData=this.createData.bind(this);
    };

    componentWillMount(){
        axios.get(this.state.baseUrl + 'gift-card/rest/shopper-balance/0', {
            params: {
                shopperToken: this.state.token,
                method: 'LIST'
            }
        })
            .then(response => {
                //console.log(response);
                //this.state.data = response.data;
                let data = [];

                if (typeof response.data.message == 'undefined') {
                    response.data.map((item, key) => {
                        console.log(item.consumer.socialDataProfile.nickname);
                        data.push({
                            consumerName: item.consumer.socialDataProfile.nickname,
                            balance: item.balance
                        });
                    });
                }

                this.setState({
                    data: data
                });
            })
            .catch(error => {

            });
    }

    createData(member, balance) {
        this.state.id += 1;
        const id = this.state.id;
        return {  id, member, balance };
    };

    render(){

        let logo = this.state.shopper.logo;

        if (logo == '') {
            logo = Avatar1;
        } else {
            logo = '/backend/uploads/logos/' + logo
        }

        return(
            <div>
                <MyAppBar
                    title="gift card list"
                />
                <MyPaper title={`Namaste, ` + this.state.shopper.name} avatar={logo}>
                    <div className={this.props.classes.wrapFilter} style={{position: 'relative'}}>

                        <Table className={this.props.classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>member</TableCell>
                                    <TableCell>Gift card balance</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.data.map((n, key) => {
                                    return (
                                        <TableRow key={key}>
                                            <TableCell>{n.consumerName}</TableCell>
                                            <TableCell>${n.balance/100}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </div>
                </MyPaper>
            </div>
        );
    }
}

StoreCreditList.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(StoreCreditList));