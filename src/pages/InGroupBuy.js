/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import MyAppBar from '../components/MyAppBar';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import classNames from 'classnames';

import HeaderLineStyled from '../components/HeaderLineStyled';

import Background from '../img/bg-ingroupbuy.jpg';
import facebookIco from '../img/facebook.svg';
import twitterIco from '../img/twitter.svg';
import Avatar1 from '../img/avatar-1.jpg';
import patternVert from '../img/pattern-v.png';
import Auth from '../components/Auth';
import Config from '../Config';
import axios from 'axios';



const styles = (theme) =>  {
    let diamAvatar = 80;

    let width=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );

    return {
        root: {
            minHeight: 'inherit',
            paddingTop: 57,
            paddingBottom: 44,
            height: (width>320)?scrollHeight:'100%'
        },
        bgImg: {
            backgroundImage: 'url(' + Background + ')',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '0 50%',
            height: 386,
            backgroundSize: 'auto 100%'
        },
        wrapCard: {
            position: 'relative',
        },
        avatar: {
            border: '5px solid #fff',
            width: diamAvatar,
            height: diamAvatar,
            position: 'absolute',
            top: 45,
            left: '50%',
            right: '50%',
            zIndex: 3,
            marginLeft: -diamAvatar / 2

        },
        container: {
            position: 'absolute',
            width: '100%',
            top: 100,
            zIndex: '2',
            textAlign: 'center'
        },
        wrapTitle: {
            display: 'inline-block',
            padding: '25px 32px 12px',
            fontWeight: 'bold',
            backgroundColor: '#fff',
            borderRadius: 6,
            textTransform: 'uppercase',
        },
        title: {
            color: '#000',
            fontSize: 20,
            lineHeight: 1,
            margin: '0'
        },
        subTitle: {
            fontSize: 11,
            color: '#a3a3a3',
            lineHeight: 1,
            margin: '3px 0 0 0'
        },
        wrapAbs: {
            position: 'absolute',
            top: 148,
            zIndex: 1,
            width: '100%',
            paddingLeft: 15,
            paddingRight: 15,
            paddingBottom: 44,
        },
        card: {
            borderRadius: 6,
            backgroundColor: '#887650',
            backgroundImage: 'url(' + patternVert + ')',
            backgroundSize: '55px auto',
            backgroundRepeat: 'no-repeat',
            padding: '26px 18px 34px',
            textAlign: 'center',
            marginBottom: 30,
        },
        name: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#fff',
            marginBottom: 3
        },
        subName: {
            fontSize: 11,
            fontWeight: 500,
            color: '#fff',
            opacity: 0.3,
            textTransform: 'uppercase',
            margin: 0
        },
        gridItem: {
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 18
        },
        bigFs: {
            fontSize: 30,
            fontWeight: 'bold',
            color: '#fff',
            marginBottom: 0,
        },
        verTd: {
            position: 'relative',
            '&:after': {
                content: "''",
                display: 'block',
                height: '54%',
                width: '1px',
                backgroundColor: 'rgba(255,255,255,0.3)',
                position: 'absolute',
                top: 30,
                right: 0
            }

        },
        time: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#fff',
            marginBottom: 4
        },
        progressbar: {
            backgroundColor: '#fff',
            height: 9,
            borderRadius: 9/2,
            marginBottom: 30
        },
        indicator: {
            height: '100%',
            width: '90%',
            backgroundColor: '#887650',
            opacity: 0.7,
        },
        horizd: {
            position: 'relative',
            '&:after': {
                content: "''",
                display: 'block',
                height: 1,
                margin: '7px 14%',
                backgroundColor: 'rgba(255,255,255,0.3)',
            }
        },
        divider: {
            color: '#9a9a9a',
            fontSize: 11,
            margin: '0 30px  10px',
            marginBottom: 30,
            paddingTop: 120,
            '&:before': {
                backgroundColor: '#e2e2e2',
            },
            '&:after': {
                backgroundColor: '#e2e2e2',
            }
        },
        btnFacebook: {
            color: '#fff',
            backgroundColor: '#3b5998',
            width: '100%',
            borderRadius: 4,
            height: 47,
            fontSize: 11,
            fontWeight: 'bold'
        },
        btnTwitter: {
            color: '#fff',
            backgroundColor: '#598dca',
            width: '100%',
            borderRadius: 4,
            height: 47,
            fontSize: 11,
            fontWeight: 'bold'
        },
        socGridItem: {
            padding: '5px 40px',
        },
        facebookIco: {
            display: 'inline-block',
            width: 22,
            height: 20,
            background: 'url(' + facebookIco + ')',
        },
        twitter: {
            display: 'inline-block',
            width: 28,
            height: 22,
            background: 'url(' + twitterIco + ')',
        },

    }
};

class InGroupBuy extends React.Component {

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
            open: false
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
                                <p className={this.props.classes.subtitle}>{this.state.giftCardValue} USD gift card</p>
                            </div>
                        </div>
                        <div className={this.props.classes.wrapAbs}>
                            <div className={this.props.classes.card}>
                                <p className={this.props.classes.name}>{this.state.owner}</p>
                                <p className={this.props.classes.subName}>group Buy Owner</p>
                                <Grid container>
                                    <Grid item xs={6} className={classNames(this.props.classes.gridItem, this.props.classes.verTd)} >
                                        <p className={this.props.classes.bigFs}>${this.state.sell}</p>
                                        <p className={this.props.classes.subName}>sell</p>
                                    </Grid>
                                    <Grid item xs={6} className={this.props.classes.gridItem}>
                                        <p className={this.props.classes.bigFs}>{this.state.totalUsers}</p>
                                        <p className={this.props.classes.subName}>totalusers</p>
                                    </Grid>
                                </Grid>
                                <div className={this.props.classes.time}>{this.state.timeLeft}</div>
                                <div className={this.props.classes.progressbar}>
                                    <div className={this.props.classes.indicator}></div>
                                </div>
                                <div className={classNames(this.props.classes.subName, this.props.classes.horizd)}>{this.state.percentOfGoal}% of ${this.state.giftCardValue} goal</div>
                                <div className={this.props.classes.subName}>${this.state.bought/100} bought by {this.state.totalUsers} users</div>
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

// InGroupBuy.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default withRoot(withStyles(styles)(InGroupBuy));
