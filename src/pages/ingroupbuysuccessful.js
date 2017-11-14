/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import MyAppBar from '../components/MyAppBar';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';

import HeaderLineStyled from '../components/HeaderLineStyled';
import CompleteIcon from '../components/CompleteIcon'

import Background from '../img/bg-ingroupbuy.jpg';
import facebookIco from '../img/facebook.svg';
import twitterIco from '../img/twitter.svg';
import Avatar1 from '../img/avatar-1.jpg';
import patternVert from '../img/pattern-v.png';


let diamAvatar = 80;

const styles = theme =>  ({
    root: {
        minHeight: 'inherit',
        paddingTop: 57,
        paddingBottom: 44,
    },
    bgimg: {
        backgroundImage: 'url(' + Background + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 50%',
        height: 386,
        backgroundSize: 'auto 100%'
    },
    wrapcard: {
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
    wraptitle: {
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
    subtitle: {
        fontSize: 11,
        color: '#a3a3a3',
        lineHeight: 1,
        margin: '3px 0 0 0'
    },
    wrapabs: {
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
        backgroundRepeatX: 'no-repeat',
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
    subname: {
        fontSize: 11,
        fontWeight: 500,
        color: '#fff',
        opacity: 0.3,
        textTransform: 'uppercase',
        margin: 0
    },
    griditem: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30
    },
    bigfs: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 0,
    },
    vertd: {
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
    btnfacebook: {
        color: '#fff',
        backgroundColor: '#3b5998',
        width: '100%',
        borderRadius: 4,
        height: 47,
        fontSize: 11,
        fontWeight: 'bold'
    },
    btntwitter: {
        color: '#fff',
        backgroundColor: '#598dca',
        width: '100%',
        borderRadius: 4,
        height: 47,
        fontSize: 11,
        fontWeight: 'bold'
    },
    socgriditem: {
        padding: '5px 40px',
    },
    facebookico: {
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
    compicon: {
        marginBottom: 15
    }

});

class InGroupBuy extends Component {
    state = {
        open: false,
    };

    render() {

        return (
            <div className={this.props.classes.root}>
                <MyAppBar title="My Group Buy"/>
                <div className={this.props.classes.bgimg}>
                    <div className={this.props.classes.wrapcard}>
                        <Avatar
                            src={Avatar1}
                            className={this.props.classes.avatar}
                        />
                        <div className={this.props.classes.container}>
                            <div className={this.props.classes.wraptitle}>
                                <p className={this.props.classes.title}>Starbucks</p>
                                <p className={this.props.classes.subtitle}>50 USD gift card</p>
                            </div>
                        </div>
                        <div className={this.props.classes.wrapabs}>
                            <div className={this.props.classes.card}>
                                <p className={this.props.classes.name}>Elizabeth Thordis</p>
                                <p className={this.props.classes.subname}>group Buy Owner</p>
                                <Grid container>
                                    <Grid item xs={4} className={this.props.classes.griditem} >
                                        <p className={this.props.classes.bigfs}>$80</p>
                                        <p className={this.props.classes.subname}>sell</p>
                                    </Grid>
                                    <Grid item xs={4} className={this.props.classes.griditem}>
                                        <p className={this.props.classes.bigfs}>$40</p>
                                        <p className={this.props.classes.subname}>you<br/>paiD</p>
                                    </Grid>
                                    <Grid item xs={4} className={this.props.classes.griditem}>
                                        <p className={this.props.classes.bigfs}>3</p>
                                        <p className={this.props.classes.subname}>total<br/>users</p>
                                    </Grid>
                                </Grid>
                                <CompleteIcon className={this.props.classes.compicon} />
                                <div className={this.props.classes.subname} style={{opacity: 1}}>successful group buy deal</div>
                            </div>
                        </div>

                    </div>

                </div>
                <HeaderLineStyled className={this.props.classes.divider} >invite your friend to buy together</HeaderLineStyled>
                <Grid container spacing={0} style={{fontSize: 11}}>
                    <Grid item xs={12} sm={6} className={this.props.classes.socgriditem}>
                        <Button className={this.props.classes.btnfacebook}><span className={this.props.classes.facebookico}></span>facebook</Button>
                    </Grid>
                    <Grid item xs={12} sm={6} className={this.props.classes.socgriditem}>
                        <Button className={this.props.classes.btntwitter}><span className={this.props.classes.twitter}></span>twitter</Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

InGroupBuy.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(InGroupBuy));
