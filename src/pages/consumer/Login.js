/* eslint-disable flowtype/require-valid-file-annotation */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import {withStyles} from 'material-ui/styles';
import withRoot from '../../components/consumer/withRoot';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Snackbar from 'material-ui/Snackbar';

import MyLinkStyled from '../../components/consumer/MyLink';
import HeaderLineStyled from '../../components/consumer/HeaderLineStyled';

import Background from '../../img/consumer/bg-women.png';
import facebookIco from '../../img/consumer/facebook.svg';
import twitterIco from '../../img/consumer/twitter.svg';

import axios from 'axios';
import Config from '../../Config';


let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

let h = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);


const styles = theme =>  ({
  root: {
    minHeight: 'inherit',
  },
  wrapper: {
    width: document.body.offsetWidth,
    maxWidth: 414,
    minHeight: '100%',
    height: '100%',
  },
  wrap: {
    minHeight: '100%',
    minWidth: '100%',
    backgroundColor: '#887650',
    backgroundImage: 'url(' + Background + ')',
    backgroundPosition: '50% -58px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 110%',
    height: (w>320)? h:'100%',

    },
    wrapContent: {
        minHeight: 'inherit',
        padding: '105px 32px 32px'
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 11,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#fff',
        marginBottom: 48,
        textAlign: 'center'
    },
    textFieldRoot: {
        padding: 0,
        'label + &': {
            marginTop: theme.spacing.unit * 6,
        },
    },
    textFieldInput: {
        borderRadius: 4,
        background: theme.palette.common.white,
        border: '1px solid #fff',
        fontSize: 12,
        padding: '15px 16px',
        marginBottom: theme.spacing.unit * 2,
        textAlign: 'center',
        color: '#887650',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
    button: {
        width: '100%',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#fff',
        padding: '16px 20px',
        borderRadius: 4,
        backgroundColor: '#887650',
        fontSize: 12,
        marginBottom: 20,
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: 'rgba(136,118,80,0.8)',
        },
        '&:active': {
            boxShadow: 'none',
        }
    },
    link: {
        fontSize: 11,
        color: '#fff',
    },
    btnFacebook: {
        color: '#fff',
        backgroundColor: '#3b5998',
        width: '100%',
        borderRadius: 4,
        height: 47,
        fontSize: 11,
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: 'rgba(59,89,152,0.8)',
        },
    },
    btnTwitter: {
        color: '#fff',
        backgroundColor: '#598dca',
        width: '100%',
        borderRadius: 4,
        height: 47,
        fontSize: 11,
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: 'rgba(89,141,202,0.8)',
        },
    },
    gridItem: {
        padding: '5px 10px',
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
    horDivId: {
        color: '#fff',
        fontSize: 11,
        marginBottom: 30,
        '&:before': {
            backgroundColor: '#d9d8d6',
        },
        '&:after': {
            backgroundColor: '#d9d8d6',
        }
    },
  message: {

    '& div': {
      width: (w>320)?'414px':'auto'
    }
  },
  error: {
   '& input': {
     border: '2px solid red'
   }
  }
});

class Login extends Component {

    constructor(props) {
        super(props);
        const config = new Config();

        this.state = {
            alert: {
                open: false,
                message: <span id="message-id">Error</span>
            },
            email: '',
            password: '',
            baseUrl: config.baseUrl
        };

        this.handleRequestClose = this.handleRequestClose.bind(this);
    };

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

        if (this.state.email == '' || this.state.password == '') {
            this.setState({
                alert: {
                    open: true,
                    message: <span id="message-id">Please fill fields</span>
                }
            });
        } else {
            axios.post(this.state.baseUrl + 'gift-card/rest/consumer/login', {
                email: this.state.email,
                password: this.state.password
            })
                .then(response => {
                    console.log(response);
                    window.localStorage.setItem('token', response.data.token);

                    // const orderShopperId = window.localStorage.getItem('order_shopper_id');
                    // const orderProcess = window.localStorage.getItem('order_process');
                    window.location = '/#/';
                    // if (!orderProcess) {
                    //     window.location = '/#/';
                    // }

                })
                .catch(error => {
                    console.log(error);
                    this.setState({
                        alert: {
                            open: true,
                            message: <span id="message-id">Login or password incorrect</span>
                        }
                    });
                });
        }
    }

    render() {

        return (
            <div className={this.props.classes.root}>
                <div className={this.props.classes.wrapper}>
                    <div className={this.props.classes.wrap}>
                        <div className={this.props.classes.wrapContent}>
                            <div className={this.props.classes.title}>DRIZZLE</div>
                            <div className={this.props.classes.subtitle}>Buy gift card with friends and saving</div>
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
                                    }
                                }}
                                onChange={ e => this.updatePassword(e)}
                            />
                            <Button raised className={this.props.classes.button} onClick={this.login.bind(this)}>Login</Button>
                            <Grid container style={{fontSize: 11, marginBottom: 45}}>
                                <Grid item xs={6}>
                                    <MyLinkStyled href="#" className={this.props.classes.link}>
                                        Forgot password?
                                    </MyLinkStyled>
                                </Grid>
                                <Grid item xs={6} style={{textAlign: 'right'}}>
                                    <MyLinkStyled href="#signup" className={this.props.classes.link}>
                                        New here? Sign Up
                                    </MyLinkStyled>
                                </Grid>
                            </Grid>
                            <HeaderLineStyled className={this.props.classes.horDivId}>or Login with</HeaderLineStyled>
                            <Grid container spacing={0} style={{fontSize: 11}}>
                                <Grid item xs={12} sm={6} className={this.props.classes.gridItem}>
                                    <Button className={this.props.classes.btnFacebook}>
                                        <span className={this.props.classes.facebookIco}></span>facebook
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={6} className={this.props.classes.gridItem}>
                                    <Button className={this.props.classes.btnTwitter}>
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
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Login));
