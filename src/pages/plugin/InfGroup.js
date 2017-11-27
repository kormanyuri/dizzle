/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../../components/plugin/withRoot';
import MyAppBar from '../../components/plugin/MyAppBar';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import classNames from 'classnames';
import MyButtonType2 from '../../components/plugin/MyButtonType2';

import Avatar1 from '../../img/plugin/avatar-1.jpg';

import styles from '../../theme/plugin/pages/InfGroup';

import Auth from '../../components/Auth';
import Config from '../../Config';
import axios from 'axios';

class InfGroup extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        const config = new Config();


        this.state = {
            id: props.match.params.id,
            shopper: '',
            timeLeft: '',
            showLoading: false,
            baseUrl: config.baseUrl,
            open: false,
        };

        this.timer = this.timer.bind(this);
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
                    showLoading:    false
                });

            })
            .catch(error => {

            });


    }

    componentDidMount(){
        // Update the count down every 1 second
        this.interval = setInterval(this.timer, 1000);
    }

    componentWillUnmount() {
        console.log('unmount')
        clearInterval(this.interval);
    }

    timer(){

        // Get todays date and time
        let now = new Date().getTime();

        // Find the distance between now an the count down date
        let distance = this.state.countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days    = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        if (!isNaN(days)) {
            this.setState({
                timeLeft: days + " days " + hours + ":" + minutes + ":" + seconds
            });
        }
        // console.log(this.state.timeLeft);
        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(this.interval);
            this.setState({
                timeLeft: "EXPIRED"
            });
        }
    }

    render() {

        return (
            <div className={this.props.classes.root}>
                <MyAppBar title="My Group Buy"/>
                <div className={this.props.classes.bgImg}>
                    <div className={this.props.classes.wrapCard}>
                        <Avatar
                            src={Avatar1}
                            className={this.props.classes.avatar}
                        />
                        <div className={this.props.classes.container}>
                            <div className={this.props.classes.wrapTitle}>
                                <p className={this.props.classes.title}>{this.state.shopper}</p>
                                <p className={this.props.classes.subTitle}>{this.state.giftCardValue} USD gift card</p>
                            </div>
                        </div>
                        <div className={this.props.classes.wrapAbs}>
                            <div className={this.props.classes.card}>
                                <p className={this.props.classes.name}>Dave invites you buy Starbucks <br/>$100 Gift card together</p>
                                <p className={this.props.classes.subName} style={{textTransform: 'none'}}>to buy this gift card successfully, <br/>Dave need to find someone <br/>to buy another $90</p>
                                <Grid container>
                                    <Grid item xs={6} className={classNames(this.props.classes.gridItem, this.props.classes.vertD)} >
                                        <p className={this.props.classes.bigFs}>${this.state.sell}</p>
                                        <p className={this.props.classes.subName}>sell</p>
                                    </Grid>
                                    <Grid item xs={6} className={this.props.classes.gridItem}>
                                        <p className={this.props.classes.bigFs}>$10</p>
                                        <p className={this.props.classes.subName}>{this.state.owner}</p>
                                    </Grid>
                                </Grid>
                                <div className={this.props.classes.time}>{this.state.timeLeft}</div>
                                <div className={this.props.classes.progressBar}>
                                    <div className={this.props.classes.indicator}></div>
                                </div>
                                <div className={classNames(this.props.classes.subName, this.props.classes.horizD)}>10% of $100 goal</div>
                                <div className={this.props.classes.subName}>$10 bought by Dave</div>
                                <div className={this.props.classes.wrapButton}>
                                    <div style={{textAlign: 'center'}}>
                                        <MyButtonType2 href="#" style={{minWidth: 165}}>group buy</MyButtonType2>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default withRoot(withStyles(styles)(InfGroup));
