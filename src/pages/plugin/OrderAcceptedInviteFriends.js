import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../../components/plugin/withRoot';
import MyAppBar from '../../components/plugin/MyAppBar';
import TextGroup from '../../components/plugin/TextGroup/TextGroup';
import MyButtonType2 from '../../components/plugin/MyButtonType2';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Card, { CardContent } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import MyDialog1 from '../../components/plugin/MyDialog1';
import classNames from 'classnames';
import CompleteIcon from '../../components/plugin/CompleteIcon';
import styles from '../../theme/plugin/pages/OrderAcceptedInviteFriends';

import Auth from '../../components/Auth';
import Config from '../../Config';
import axios from 'axios';

class OrderAcceptedInviteFriends extends Component {

    constructor(props) {
        super(props);
        const shopper = JSON.parse(window.localStorage.getItem('shopper'));
        const user    = JSON.parse(window.localStorage.getItem('user'));

        const orderGroupBuyId = window.localStorage.getItem('order_group_buy_id');
        const config = new Config();
        const shareUrl = config.baseFrontUrl + '#/plugin/friend-buy/' + orderGroupBuyId;


        this.state = {
            shareFbUrl:         'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(shareUrl) + '&t=Friend share Gift Card',
            shareGooglePlusUrl: 'https://plus.google.com/share?url='+ encodeURIComponent(shareUrl),
            shareTwitterUrl:    'https://twitter.com/share?url=' + encodeURIComponent(shareUrl) + '&via=TWITTER_HANDLE&text=Friend share Gift Card',
            giftCard:           JSON.parse(window.localStorage.getItem('gift_card')),
            user:               user,
            shopper:            shopper,
            amount:             window.localStorage.getItem('order_amount'),
            open:               false
        };
    }

    handleClickOpen() {
        //console.log(this.state)
        this.setState({ open: true });
        //console.log(this.state);
    }

    //handleRequestClose(){
    //    this.setState({ open: false });
    //}

    render() {

        return (
            <div className={this.props.classes.root}>
                <MyAppBar title="Order Accepted" />
                <Card className={this.props.classes.card}>
                    <div className={this.props.classes.cardHeader}>
                    </div>
                    <CardContent className={this.props.classes.cardContent}>
                        <div className={this.props.classes.title}>
                            Welcome, {this.state.user.name}
                        </div>
                        <Divider className={this.props.classes.divider} />
                        <ul className={this.props.classes.ul}>
                            <li className={this.props.classes.listItem}>
                                <div className={classNames(this.props.classes.param)}>
                                    <span className={this.props.classes.paramValue}>${this.state.amount/100}</span>
                                    <span className={this.props.classes.paramProp}>{this.state.shopper.name} ${this.state.giftCard.giftCardValue} gift card</span>
                                </div>
                            </li>
                        </ul>
                        <Divider className={this.props.classes.divider} style={{marginBottom: 51}} />
                        <TextGroup groupName="Payment Confirmation">
                            <div style={{marginTop: 70, marginBottom: 35, textAlign: 'center'}}>
                                <CompleteIcon className={this.props.classes.compIcon} />
                                <div className={this.props.classes.subName} style={{opacity: 1}}>
                                    ongratulations, Your
                                    <br/>group buy is active!
                                </div>
                            </div>
                            <div style={{textAlign: 'center', marginTop: 30, marginBottom: 70}}>
                                <Grid container>
                                    <Grid item xs={12} style={{padding: 6}}>
                                        <MyButtonType2 style={{width: '100%'}} onClick={this.handleClickOpen.bind(this)}>
                                            invite your friends
                                        </MyButtonType2>
                                    </Grid>
                                    <Grid item xs={12} style={{padding: 6}}>
                                        <MyButtonType2 style={{paddingLeft: 22, paddingRight: 22, width: '100%'}} href="/balancelist">
                                            check group buy status
                                        </MyButtonType2>
                                    </Grid>
                                </Grid>
                            </div>
                        </TextGroup>
                    </CardContent>
                </Card>
                <MyDialog1 open={this.state.open} titlecontent="Invite your friends" subtitlecontent={["Invite your friends through", <br key="0"/>, "social media to buy it together"]} >
                    <div className={this.props.classes.wrapSoc}>
                        <Button className={this.props.classes.btnFacebook} href={this.state.shareFbUrl} target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" id="svg2" viewBox="0 0 10.450591 20" height="20" width="10.450591"><path d="M8.334 3.33h2.117V0H7.276S5.28-.052 4.01 1.607c0 0-.862.823-.875 3.214v2.496H0v3.54h3.135V20h3.62v-9.144h3.12l.432-3.54H6.754v-2.51c.013-.273.13-1.5 1.58-1.475z" fill="#fff" /></svg>
                        </Button>
                        <Button className={this.props.classes.btnTwitter} href={this.state.shareTwitterUrl} target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" id="svg2" viewBox="0 0 19.685601 15.999999" height="15.999999" width="19.685601"><path d="M6.18 16c7.437 0 11.51-6.165 11.51-11.51 0-.176 0-.353-.016-.514.788-.563 1.48-1.288 2.012-2.092-.725.322-1.513.53-2.318.644.837-.5 1.48-1.288 1.786-2.238-.788.467-1.64.805-2.575.982C15.84.482 14.79 0 13.632 0c-2.237-.032-4.04 1.787-4.04 4.008 0 .322.032.628.097.918-3.364-.16-6.342-1.77-8.338-4.217-.354.594-.547 1.286-.547 2.027 0 1.4.708 2.64 1.803 3.364-.66-.015-1.288-.208-1.835-.498v.048c0 1.964 1.4 3.59 3.25 3.96-.337.096-.69.145-1.06.145-.26 0-.516-.032-.758-.08.515 1.61 2.012 2.784 3.783 2.816-1.385 1.08-3.123 1.74-5.022 1.74-.322 0-.644-.017-.966-.065C1.77 15.325 3.895 16 6.18 16" fill="#fff" /></svg>
                        </Button>
                    </div>
                </MyDialog1>
            </div>
        );
    }
}

OrderAcceptedInviteFriends.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(OrderAcceptedInviteFriends));