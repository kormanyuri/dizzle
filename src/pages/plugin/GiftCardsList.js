/* eslint-disable flowtype/require-valid-file-annotation */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import withRoot from '../../components/plugin/withRoot';
import MyAppBar from '../../components/plugin/MyAppBar';

import MyCard from '../../components/plugin/MyCard';

import Avatar1 from '../../img/plugin/avatar-1.jpg';

import styles from '../../theme/plugin/pages/GiftCardsList';

import Auth from '../../components/Auth';
import Config from '../../Config';
import axios from 'axios';

class GiftCardsList extends Component {

    constructor(props){
        super(props);

        const config = new Config();

        window.localStorage.setItem('order_shopper_id', props.match.params.shopperId);

        this.state = {
            // id: props.match.params.id,
            token:      window.localStorage.getItem('token'),
            shopperId:  typeof props.match.params.shopperId  != 'undefined' ? props.match.params.shopperId : null,
            groupBuyId: typeof props.match.params.groupBuyId != 'undefined' ? props.match.params.groupBuyId : null,
            shopper:    '',
            baseUrl:    config.baseUrl,
            items:      [],
            amount:     0,
            iterator:   0,
            status:     'Load...',
            open:       false,
            message:    ''
        };

        this.loadShopper = this.loadShopper.bind(this);
        this.loadGroupBuy = this.loadGroupBuy.bind(this);
    }

    componentWillMount(){

        this.setState({
            message: 'Load...'
        });

        this.loadList(this.state.shopperId);

        if (this.state.shopperId) {
            this.loadShopper();
        }

        if (this.state.groupBuyId) {
            this.loadGroupBuy();
        }
    }

    loadList(shopperId){
        axios.get(this.state.baseUrl + 'gift-card/rest/gift-card', {
            params: {
                method: 'LIST',
                shopperId: shopperId
            }
        })
            .then(response => {
                //console.log(response.data);

                if (typeof response.data.message != 'undefined') {

                    this.setState({
                        status: response.data.message
                    });

                } else {

                    this.setState({
                        items: response.data,
                        iterator: response.data.giftCardValue/25
                    });

                }

                // $('#plugin').modal('show');
            })
            .catch(error => {
                console.log(error);
            });
    }

    loadShopper(){
        axios.get(this.state.baseUrl + 'gift-card/rest/shopper/' + this.state.shopperId)
            .then(response => {
                console.log(response);

                if (typeof response.data.message != 'undefined') {

                    this.setState({
                        status: response.data.message
                    });

                } else {

                    // this.setState({
                    //     items: response.data,
                    //     iterator: response.data.giftCardValue/25
                    // });
                    const shopperObject = JSON.stringify({name: response.data.name, logo: response.data.logo, id: response.data.id});
                    window.localStorage.setItem('shopper', shopperObject);
                }
            })
            .catch(error => {

            });
    }

    loadGroupBuy(){
        window.localStorage.setItem('is_friend_buy', 1);

        axios.get(this.state.baseUrl + 'gift-card/rest/group-buy/' + this.state.groupBuyId)
            .then(response => {
                console.log(response);

                const shopperObject = JSON.stringify({
                    name:   response.data.giftCard.shopper.name,
                    logo:   response.data.giftCard.shopper.logo,
                    id:     response.data.giftCard.shopper.id
                });

                const giftCardObject = JSON.stringify({
                    id:                 response.data.giftCard.id,
                    giftCardValue:      response.data.giftCard.giftCardValue,
                    giftCardDiscount:   response.data.giftCard.giftCardDiscount,
                    status:             response.data.giftCard.status
                });

                window.localStorage.setItem('gift_card', giftCardObject);
                window.localStorage.setItem('shopper', shopperObject);
                window.localStorage.setItem('isBuyNow', 0);
                window.localStorage.setItem('order_amount', 2500);
                window.localStorage.setItem('order_gift_card_id', response.data.giftCard.id);
                window.localStorage.setItem('order_group_buy_id', response.data.id);
                window.localStorage.setItem('order_process', 1);
                window.localStorage.setItem('order_shopper_id', response.data.giftCard.shopper.id);

                this.loadList(response.data.giftCard.shopper.id);

            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        if (this.state.items.length > 0) {
            return (

                <div className={this.props.classes.root}>

                    <MyAppBar title="Gift Cards"/>
                    {this.state.items.map((item, i) => {
                            let logo = Avatar1;

                            if (item.shopper.logo != '') {
                                logo = '/backend/uploads/logos/' + item.shopper.logo;
                            }

                            return <MyCard
                                key={i}
                                name={item.shopper.name}
                                avatar={logo}
                                giftcard={`$` + item.giftCardValue}
                                sell={`$` + (item.giftCardValue - (item.giftCardValue * item.giftCardDiscount / 100))}
                                buytogether="true"
                                infbutt={`/#/plugin/inf-group/` + item.id}
                                titlecontent={`$` + item.giftCardValue + ` Gift Card Group Buy`}
                                subtitlecontent={["input the amount you",
                                    <br key="0"/>, "want to buy (min. $25; max $" + item.giftCardValue + ")"]}
                                discount={item.giftCardDiscount}
                                giftCardId={item.id}
                                giftCardValue={item.giftCardValue * 100}
                            />
                        }
                    )}
                </div>

            );
        } else {
            return (

                <div className={this.props.classes.root}>

                    <MyAppBar title="Gift Cards"/>
                    {this.state.message}
                </div>

            );
        }
    }
}

GiftCardsList.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(GiftCardsList));
