/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../../components/consumer/withRoot';
import MyAppBar from '../../components/consumer/MyAppBar';

import MyCard from '../../components/consumer/MyCard'

import Avatar1 from '../../img/consumer/avatar-1.jpg';

import styles from '../../theme/consumer/pages/GroupBuyList';

import Auth from '../../components/Auth';
import Config from '../../Config';
import axios from 'axios';


class GroupBuyList extends Component {

    constructor(props){
        super(props);
        const config = new Config();

        this.state = {
            items: [],
            empty: false,
            showLoading: false,
            baseUrl: config.baseUrl,
            open: false,
            message: ''
        };

        const auth = new Auth();
        auth.checkAuth();
    }

    componentWillMount(){
        this.setState({
            showLoading: true
        });

        const token = window.localStorage.getItem('token');
        this.setState({
            message: 'Load...'
        });

        axios.get(this.state.baseUrl + 'gift-card/rest/partner', {
            params: {
                token: token,
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
                    <MyAppBar title="My Group Buy"/>
                    {this.state.items.map((item, key) => {
                            let url =  '/#/ingroupbuy/' + item.giftCardGroupBuy.id;
                            let avatar = Avatar1;

                            if (item.giftCardGroupBuy.status == 2) {
                                url = '/#/ingroupbuysuccessful/' + item.giftCardGroupBuy.id;
                            }

                            if (item.giftCardGroupBuy.giftCard.shopper.logo) {
                                avatar = '/backend/uploads/logos/' + item.giftCardGroupBuy.giftCard.shopper.logo
                            }

                            return <MyCard
                                        key={key}
                                        name={item.giftCardGroupBuy.giftCard.shopper.name}
                                        avatar={avatar}
                                        status={item.giftCardGroupBuy.status}
                                        giftCard={`$` + item.giftCardGroupBuy.giftCard.giftCardValue}
                                        sell={`$` + (item.giftCard.giftCardValue - (item.giftCard.giftCardValue * item.giftCard.giftCardDiscount / 100))}
                                        groupBuyOwner={item.giftCardGroupBuy.ownerConsumer.socialDataProfile.nickname}
                                        href={url}
                                    />
                        }
                    )}
                </div>
            );
        } else {
            return (
                <div className={this.props.classes.root}>
                    <MyAppBar title="My Group Buy"/>
                    {this.state.message}
                </div>
            );
        }
    }
}

GroupBuyList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(GroupBuyList));
