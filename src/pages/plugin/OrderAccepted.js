import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../../components/plugin/withRoot';
import MyAppBar from '../../components/plugin/MyAppBar';
import TextGroup from '../../components/plugin/TextGroup/TextGroup';
import MyButtonType2 from '../../components/plugin/MyButtonType2';
import Card, { CardContent } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import classNames from 'classnames';
import CompleteIcon from '../../components/plugin/CompleteIcon';

import styles from '../../theme/plugin/pages/OrderAccepted';

import Auth from '../../components/Auth';
import Config from '../../Config';
import axios from 'axios';

class OrderAccepted extends Component {

    constructor(props){
        super(props);

        const config = new Config();
        const shopper = JSON.parse(window.localStorage.getItem('shopper'));
        const user    = JSON.parse(window.localStorage.getItem('user'));

        this.state = {
            shopperName: shopper.name,
            userName:    user.name,
            amount:      window.localStorage.getItem('order_amount'),
            baseUrl:     config.baseUrl,
            giftCard:    JSON.parse(window.localStorage.getItem('gift_card'))
        }
    }

    render() {

        return (
            <div className={this.props.classes.root}>
                <MyAppBar
                    title="Order Accepted"
                />
                <Card className={this.props.classes.card}>
                    <div className={this.props.classes.cardHeader}>
                    </div>
                    <CardContent className={this.props.classes.cardContent}>
                        <div className={this.props.classes.title}>
                            Welcome, {this.state.userName}
                        </div>
                        <Divider className={this.props.classes.divider} />
                        <ul className={this.props.classes.ul}>
                            <li className={this.props.classes.listItem}>
                                <div className={classNames(this.props.classes.param)}>
                                    <span className={this.props.classes.paramValue}>${this.state.amount/100}</span>
                                    <span className={this.props.classes.paramProp}>{this.state.shopperName} ${this.state.giftCard.giftCardValue} gift card</span>
                                </div>
                            </li>
                        </ul>
                        <Divider className={this.props.classes.divider} style={{marginBottom: 51}} />
                        <TextGroup groupName="Payment Confirmation">
                            <div style={{marginTop: 70, marginBottom: 90, textAlign: 'center'}}>
                                <CompleteIcon className={this.props.classes.compIcon} />
                                <div className={this.props.classes.subName} style={{opacity: 1}}>congratulations! <br/>your order is accepted</div>
                            </div>
                            <div style={{textAlign: 'center', marginTop: 30, marginBottom: 70}}>
                                <MyButtonType2 href="/balancelist">access your gift card</MyButtonType2>
                            </div>
                        </TextGroup>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

OrderAccepted.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(OrderAccepted));

