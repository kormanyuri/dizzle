/* eslint-disable flowtype/require-valid-file-annotation */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import {withStyles} from 'material-ui/styles';
import withRoot from '../../components/plugin/withRoot';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Snackbar from 'material-ui/Snackbar';

import MyLinkStyled from '../../components/plugin/MyLink';
import HeaderLineStyled from '../../components/plugin/HeaderLineStyled';

import styles from '../../theme/plugin/pages/Login'

import Auth from '../../components/Auth';
import Config from '../../Config';
import axios from 'axios';
import Facebook from '../../utils/Facebook';


class Login extends Component {

    constructor(props) {
        super(props);
        const config = new Config();

        const shopper = JSON.parse(window.localStorage.getItem('shopper'));

        this.state = {
            alert: {
                open: false,
                message: <span id="message-id">Error</span>
            },
            email:      '',
            password:   '',
            shopperId:  shopper ? shopper.id : props.match.params.shopperId,
            baseUrl:    config.baseUrl
        };
        this.facebook = new Facebook();
        this.loadShopper = this.loadShopper.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
    };

    componentWillMount(){
        const shopper = window.localStorage.getItem('shopper');

        if (!shopper) {
            this.loadShopper();
        }
    }

    loadShopper(){
        axios.get(this.state.baseUrl + 'gift-card/rest/shopper/' + this.state.shopperId, {

        })
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

    handleRequestClose() {
        this.setState({
            open: false,
        });
    };

    handleClick() {
        this.setState({
            open: true,
        });
    };

    updateEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    updatePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    login() {

        this.setState({
            showLoading: true
        });

        const shopper = JSON.parse(window.localStorage.getItem('shopper'));

        axios.post(this.state.baseUrl + 'gift-card/rest/consumer/login', {
            email: this.state.email,
            password: this.state.password
        })
            .then(response => {
                console.log(response);
                window.localStorage.setItem('token', response.data.token);
                window.localStorage.setItem('user', JSON.stringify(response.data.user));
                // const orderShopperId = window.localStorage.getItem('order_shopper_id');
                const orderProcess = window.localStorage.getItem('order_process');

                if (!orderProcess) {
                    window.location = '/plugin/gift-cards-list/' + shopper.id;
                } else {
                    window.localStorage.removeItem('order_process');
                    window.location = '/plugin/payment-buy-now';
                }

            })
            .catch(error => {

                this.setState({
                    alert: {
                        open: true,
                        message: <span id="message-id">Login or password incorrect</span>
                    }
                });
            });
    }

    handleFBLogin() {
        console.log(this.facebook);
        FB.login(this.facebook.checkFBLoginState, {scope: 'email,user_likes'});
    }

    handleTwitterLogin() {
        window.location = '/backend/gift-card/rest/twitter-auth/reuest-token';
    }

    componentDidMount(){
        //this.loadFbLoginApi();
        this.facebook.loadFbLoginApi();
    }

    render() {
        //const { vertical, horizontal, open } = this.state;
        return (
            <div className={this.props.classes.root}>
                <div className={this.props.classes.wrapper}>
                    <div className={this.props.classes.wrap}>

                        <div className={this.props.classes.wrapContent}>
                            <div className={this.props.classes.title}>DRIZZLE</div>
                            <div className={this.props.classes.subTitle}>Buy gift card with friends and saving</div>
                            <TextField
                                placeholder="Your Email"
                                fullWidth={true}
                                InputProps={{
                                    disableUnderline: true,
                                    classes: {
                                        root: this.props.classes.textFieldRoot,
                                        input: this.props.classes.textFieldInput,
                                    },
                                }}
                                onChange={ e => this.updateEmail(e) }
                            />
                            <TextField
                                type="password"
                                placeholder="Password"
                                fullWidth={true}
                                InputProps={{
                                    disableUnderline: true,
                                    classes: {
                                        root: this.props.classes.textFieldRoot,
                                        input: this.props.classes.textFieldInput,
                                    },
                                }}
                                onChange={ e => this.updatePassword(e)}
                            />
                            <Button raised className={this.props.classes.button}  onClick={this.login.bind(this)}>Login</Button>
                            <Grid container style={{fontSize: 11, marginBottom: 45}}>
                                <Grid item xs={6}>
                                    <MyLinkStyled href="/restore-password-step-1" className={this.props.classes.link}>
                                        Forgot password?
                                    </MyLinkStyled>
                                </Grid>
                                <Grid item xs={6} style={{textAlign: 'right'}}>
                                    <MyLinkStyled href={`/plugin/sign-up/` + this.state.shopperId} className={this.props.classes.link}>
                                        New here? Sign Up
                                    </MyLinkStyled>
                                </Grid>
                            </Grid>
                            <HeaderLineStyled className={this.props.classes.horDivid}>or Login with</HeaderLineStyled>
                            <Grid container spacing={0} style={{fontSize: 11}}>
                                <Grid item xs={12} sm={6} className={this.props.classes.gridItem}>
                                    <Button className={this.props.classes.btnfacebook} onClick={this.handleFBLogin}>
                                        <span className={this.props.classes.facebookIco}></span>facebook
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={6} className={this.props.classes.gridItem}>
                                    <Button className={this.props.classes.btntwitter} onClick={this.handleTwitterLogin}>
                                        <span className={this.props.classes.twitter}></span>twitter
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>

                    </div>
                </div>
                <Snackbar
                    className={this.props.classes.message}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={this.state.alert.open}
                    onRequestClose={this.handleRequestClose}
                    SnackbarContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={this.state.alert.message}
                />
            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(Login));
