/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../../components/consumer/withRoot';
import MyAppBar from '../../components/consumer/MyAppBar';


import MyCardBalance from '../../components/consumer/MyCardBalance'

import Avatar1 from '../../img/consumer/avatar-1.jpg';
import Avatar2 from '../../img/consumer/avatar-2.jpg';
import Avatar3 from '../../img/consumer/avatar-3.jpg';

import styles from '../../theme/consumer/pages/BalanceList';

import Auth from '../../components/Auth';
import Config from '../../Config';
import axios from 'axios';

let width=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;


class BalanceList extends Component {

    constructor(props){
        super(props);

        const config = new Config();

        this.state = {
            items: [],
            baseUrl: config.baseUrl,
            message: '',
            open: false
        };
    }

    componentWillMount(){
        const token = window.localStorage.getItem('token');

        this.setState({
            message: 'Load...'
        });

        axios.get(this.state.baseUrl + 'gift-card/rest/shopper-balance/0', {
            params: {
                token: window.localStorage.getItem('token'),
                method: 'LIST'
            }
        })
            .then(response => {
                console.log(response);

                if (typeof response.data.message == 'undefined') {
                    this.setState({
                        items: response.data
                    });
                } else {
                    this.setState({
                        message: 'List empty'
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {

        if (this.state.items.length > 0) {
            return (
                <div className={this.props.classes.root}>
                    <MyAppBar classes={{}} title="Balanse"/>
                    {
                        this.state.items.map((item, key) => {
                                let avatar = Avatar1;

                                if (item.shopper.logo) {
                                    avatar = '/backend/uploads/logos/' + item.shopper.logo
                                }

                                return <MyCardBalance
                                    key={key}
                                    name={item.shopper.name}
                                    avatar={avatar}
                                    giftCard={`$` + item.balance / 100}
                                    groupBuyOwner="jacky"
                                    href={`/transactions/${item.shopper.id}`}
                                />
                            }
                        )
                    }
                </div>
            );
        } else {
            return (
                <div className={this.props.classes.root}>
                    <MyAppBar title="Balance"/>
                    {this.state.message}
                </div>
            );
        }
    }
}

BalanceList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(BalanceList));
