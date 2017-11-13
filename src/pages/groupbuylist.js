/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import MyAppBar from '../components/MyAppBar';

import MyCard from '../components/MyCard'

import Avatar1 from '../img/avatar-1.jpg';

import Auth from '../components/Auth';
import Config from '../Config';
import axios from 'axios';

//let width=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

//let scrollHeight = Math.max(
//    document.body.scrollHeight, document.documentElement.scrollHeight,
//    document.body.offsetHeight, document.documentElement.offsetHeight,
//    document.body.clientHeight, document.documentElement.clientHeight
//);

const styles = theme =>  ({
    root: {
        minHeight: 'inherit',
        paddingTop: 55,
        paddingBottom: 44,
        //height: (width>320)?scrollHeight:'100%'
    },

});

class GroupBuyList extends Component {

    constructor(props){
        super(props);
        const config = new Config();

        this.state = {
            items: [],
            empty: false,
            showLoading: false,
            baseUrl: config.baseUrl,
            open: false
        };

        const auth = new Auth();
        auth.checkAuth();
    }

    componentWillMount(){
        this.setState({
            showLoading: true
        });

        const token = window.localStorage.getItem('token');
        axios.get(this.state.baseUrl + 'gift-card/rest/partner', {
            params: {
                token: token,
                method: 'LIST'
            }
        })
            .then(response => {
                console.log(response);
                this.setState({
                    items: response.data,
                    showLoading: false
                });

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
                    {this.state.items.map((item, key) =>
                        <MyCard
                            name={item.giftCardGroupBuy.giftCard.shopper.name}
                            avatar={Avatar1}
                            status="ongoing"
                            giftcard={`$` + item.giftCardGroupBuy.giftCard.giftCardValue}
                            sell={`$` + item.giftCardGroupBuy.giftCard.giftCardValue }
                            groupbuyowner={item.giftCardGroupBuy.ownerConsumer.socialDataProfile.nickname}
                            href="#ingroupbuysuccessful"
                        />
                    )}
                </div>
            );
        } else {
            return (
                <div className={this.props.classes.root}>
                    <MyAppBar title="My Group Buy"/>
                    Load....
                </div>
            );
        }
    }
}

GroupBuyList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(GroupBuyList));
