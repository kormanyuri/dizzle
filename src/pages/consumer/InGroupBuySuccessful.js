/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import withRoot from '../../components/consumer/withRoot';
import MyAppBar from '../../components/consumer/MyAppBar';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';

import HeaderLineStyled from '../../components/consumer/HeaderLineStyled';
import CompleteIcon from '../../components/consumer/CompleteIcon'

import Avatar1 from '../../img/consumer/avatar-1.jpg';

import styles from '../../theme/consumer/pages/InGroupBuySuccessful';

import Auth from '../../components/Auth';
import Config from '../../Config';
import axios from 'axios';

let diamAvatar = 80;


class InGroupBuySuccessful extends Component {


    constructor(props){
        super(props);

        const config = new Config();
        this.state = {
            id:             props.match.params.id,
            shopper:        '',
            timeLeft:       '',
            showLoading:    false,
            baseUrl:        config.baseUrl,
            open:           false
        };
    }

    componentWillMount(){
        console.log(this.props.classes);
        console.log(styles());

        this.setState({
            showLoading: true
        });

        axios.get(this.state.baseUrl + 'gift-card/rest/group-buy/' + this.state.id)
            .then(response => {

                const bought = response.data.bought ? response.data.bought : 0;

                this.setState({
                    shopper:        response.data.giftCard.shopper.name,
                    giftCardValue:  response.data.giftCard.giftCardValue,
                    owner:          response.data.ownerConsumer.socialDataProfile.nickname,
                    totalUsers:     response.data.countPartners,
                    sell:           response.data.giftCard.giftCardValue,
                    countDownDate:  new Date(response.data.dateExpired.date).getTime(),
                    percentOfGoal:  (bought/(response.data.giftCard.giftCardValue/100))/100,
                    bought:         bought,
                    showLoading:    false,
                    logo:           response.data.giftCard.shopper.logo
                });

            })
            .catch(error => {

            });


    }

    componentDidMount(){
        // Update the count down every 1 second
        this.interval = setInterval(this.timer, 1000);
    }

    render() {
        let avatar = Avatar1;

        if (this.state.logo) {
            avatar = '/backend/uploads/logos/' + this.state.logo;
        }

        return (
            <div className={this.props.classes.root}>
                <MyAppBar title="My Group Buy"/>
                <div className={this.props.classes.bgImg}>
                    <div className={this.props.classes.wrapCard}>
                        <Avatar
                            src={avatar}
                            className={this.props.classes.avatar}
                        />
                        <div className={this.props.classes.container}>
                            <div className={this.props.classes.wrapTitle}>
                                <p className={this.props.classes.title}>{this.state.shopper}</p>
                                <p className={this.props.classes.subtitle}>{this.state.giftCardValue} USD gift card</p>
                            </div>
                        </div>
                        <div className={this.props.classes.wrapAbs}>
                            <div className={this.props.classes.card}>
                                <p className={this.props.classes.name}>{this.state.owner}</p>
                                <p className={this.props.classes.subName}>group Buy Owner</p>
                                <Grid container>
                                    <Grid item xs={4} className={this.props.classes.gridItem} >
                                        <p className={this.props.classes.bigFs}>${this.state.sell}</p>
                                        <p className={this.props.classes.subName}>sell</p>
                                    </Grid>
                                    <Grid item xs={4} className={this.props.classes.gridItem}>
                                        <p className={this.props.classes.bigFs}>$40</p>
                                        <p className={this.props.classes.subName}>you<br/>paiD</p>
                                    </Grid>
                                    <Grid item xs={4} className={this.props.classes.gridItem}>
                                        <p className={this.props.classes.bigFs}>{this.state.totalUsers}</p>
                                        <p className={this.props.classes.subName}>total<br/>users</p>
                                    </Grid>
                                </Grid>
                                <CompleteIcon className={this.props.classes.compIcon} />
                                <div className={this.props.classes.subName} style={{opacity: 1}}>successful group buy deal</div>
                            </div>
                        </div>

                    </div>

                </div>
                <HeaderLineStyled className={this.props.classes.divider} >invite your friend to buy together</HeaderLineStyled>
                <Grid container spacing={0} style={{fontSize: 11}}>
                    <Grid item xs={12} sm={6} className={this.props.classes.socGridItem}>
                        <Button className={this.props.classes.btnFacebook}>
                            <span className={this.props.classes.facebookIco}></span>facebook
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6} className={this.props.classes.socGridItem}>
                        <Button className={this.props.classes.btnTwitter}>
                            <span className={this.props.classes.twitter}></span>twitter
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

InGroupBuySuccessful.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(InGroupBuySuccessful));
