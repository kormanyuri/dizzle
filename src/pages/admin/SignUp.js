/* eslint-disable flowtype/require-valid-file-annotation */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import {withStyles} from 'material-ui/styles';
import withRoot from '../../components/admin/withRoot';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Snackbar from 'material-ui/Snackbar';

import MyLinkStyled from '../../components/admin/MyLink';

import styles from '../../theme/admin/pages/SignUp'

import axios from 'axios';
import Core from  '../../utils/Core';
import Config from '../../Config';

class SignUp extends Component {

    constructor(props){
        super(props);
        const config = new Config();

        this.state = {
            showLoading: false,
            showWarningEmail: false,
            showWarningFirstName: false,
            showWarningLastName: false,
            showWarningPassword: false,
            showWarningToast: false,

            name: '',
            warningToastMessage: '',
            open: false,
            alert: {
                open: false,
                message: <span id="message-id">Error</span>
            },
            email: '',
            password: '',
            baseUrl: config.baseUrl
        };

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


        if (this.state.name === '') {
            this.setState({
                showWarningLastName: true
            });
            allowSave = false;
            this.setState({
                alert: {
                    open: true,
                    message: 'Name is empty'
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

            axios.post(this.state.baseUrl + 'gift-card/rest/shopper/0', {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
                .then(response => {
                    this.setState({
                        showLoading: false,
                        showWarningEmail: false
                    });
                    //window.location = '/admin/login';
                    this.setState({
                        alert: {
                            open: true,
                            message: response.data.message
                        }
                    });

                    setTimeout(() => {
                        this.setState({
                            alert: {
                                open: false,
                                message: ''
                            }
                        });
                        window.location = '/admin/login';
                    }, 3000);
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
        this.setState({
            name: e.target.value
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
                <div className={this.props.classes.wrap}>
                    <div className={this.props.classes.wrapcontent}>
                        <div className={this.props.classes.title}>DRIZZLE</div>
                        <div className={this.props.classes.subtitle}>welcome to Merchant Portal</div>
                        <TextField
                            placeholder="Shopper Name"
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
                            placeholder="Email"
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
                        <Button raised className={this.props.classes.button} onClick={this.save.bind(this)}>Sign up</Button>
                        <Grid container style={{fontSize: 11, marginBottom: 45, textAlign: 'center'}}>
                            <Grid item xs={12}>
                                <MyLinkStyled href="/admin/login" className={this.props.classes.link}>
                                    Already have an account? Log In!
                                </MyLinkStyled>
                            </Grid>
                        </Grid>
                    </div>

                </div>
                <Snackbar
                    className={this.props.classes.message}
                    anchorOrigin={{vertical: 'top', horizontal: 'center'}}
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
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(SignUp));
