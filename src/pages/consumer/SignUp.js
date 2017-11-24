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

import styles from '../../theme/consumer/pages/SignUp';

import Config from '../../Config';
import axios from 'axios';



class SignUp extends Component {

    constructor(props) {
        super(props);
        const config = new Config();

        this.state = {
            showLoading: false,
            showWarningEmail: false,
            showWarningFirstName: false,
            showWarningLastName: false,
            showWarningPassword: false,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            baseUrl: config.baseUrl,
            showWarningToast: false,
            warningToastMessage: '',
            open: false,
            alert: {
                open: false,
                message: <span id="message-id">Error</span>
            }
        };

        this.handleRequestClose = this.handleRequestClose.bind(this);
    }

    showLoading() {
        this.setState({showLoading: true});

        this.state.loadingTimer = setTimeout(() => {
            this.setState({
                showLoading: false
            });
        }, 2000);
    }

    save() {

        let allowSave = true;

        if (this.state.firstName === '') {
            this.setState({
                showWarningFirstName: true
            });
            allowSave = false;
            this.setState({
                alert: {
                    open: true,
                    message: 'First Name is empty'
                }
            });
        } else {
            this.setState({
                showWarningFirstName: false
            });
        }

        if (this.state.lastName === '') {
            this.setState({
                showWarningLastName: true
            });
            allowSave = false;
            this.setState({
                alert: {
                    open: true,
                    message: 'Last Name is empty'
                }
            });
        } else {
            this.setState({
                showWarningLastName: false
            });
        }

        if (this.state.email === '') {
            this.setState({
                showWarningEmail: true
            });
            allowSave = false;
            this.setState({
                alert: {
                    open: true,
                    message: 'Email is empty'
                }
            });
        } else {
            this.setState({
                showWarningEmail: false
            });
        }

        if (this.state.password === '') {
            this.setState({
                showWarningPassword: true
            });
            allowSave = false;
            this.setState({
                alert: {
                    open: true,
                    message: 'Password is empty'
                }
            });
        } else {
            this.setState({
                showWarningPassword: false
            });
        }

        if (allowSave) {
            this.setState({
                showLoading: true
            });

            axios.post(this.state.baseUrl + 'gift-card/rest/consumer/0', {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
            })
                .then(response => {
                    this.setState({
                        showLoading: false,
                        showWarningEmail: false
                    });
                    window.location = '/#/login';
                })
                .catch(error => {
                    console.log(error.response.data.message);
                    this.setState({
                        showLoading: false,
                        showWarningEmail: true,
                        showWarningToast: true,
                        warningToastMessage: error.response.data.message
                    });

                    setTimeout(() => {
                        this.setState({
                            showWarningToast: false
                        });
                    }, 3000);
                });
        }
    }

    updateName(e) {
        const name = e.target.value.split(' ');
        this.setState({
            firstName: typeof name[0] !== 'undefined' ? name[0] : '',
            lastName:  typeof name[1] !== 'undefined' ? name[1] : ''
        });
    }

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

    render() {

        return (
            <div className={this.props.classes.root}>
                <div className={this.props.classes.wrapper}>
                    <div className={this.props.classes.wrap}>

                        <div className={this.props.classes.wrapContent}>
                            <div className={this.props.classes.title}>DRIZZLE</div>
                            <div className={this.props.classes.subtitle}>Buy gift card with friends and saving</div>
                            <TextField
                                placeholder="Your Name"
                                fullWidth={true}
                                InputProps={{
                                    disableUnderline: true,
                                    classes: {
                                        root: this.props.classes.textFieldRoot,
                                        input: this.props.classes.textFieldInput,
                                    },
                                }}
                                onChange={e => this.updateName(e) }
                            />
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
                                onChange={e => this.updateEmail(e) }
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
                                onChange={e => this.updatePassword(e) }
                            />
                            <Button raised className={this.props.classes.button}  onClick={this.save.bind(this)}>
                                Sign up
                            </Button>
                            <Grid container style={{fontSize: 11, marginBottom: 45, textAlign: 'center'}}>
                                <Grid item xs={12}>
                                    <MyLinkStyled href="#login" className={this.props.classes.link}>
                                        Already have an account? Log In!
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

SignUp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(SignUp));
