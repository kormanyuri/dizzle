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

import styles from '../../theme/admin/pages/Login'

import axios from 'axios';
import Config from '../../Config';

class Login extends Component {


    constructor(props){
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
        this.handleClick = this.handleClick.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
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


        axios.post(this.state.baseUrl + 'shopper-admin/rest/login', {
            email: this.state.email,
            password: this.state.password
        })
            .then(response => {
                console.log(response);

                window.localStorage.setItem('token', response.data.token);
                window.localStorage.setItem('shopper', JSON.stringify({
                    id:     response.data.id,
                    name:   response.data.name,
                    logo:   response.data.logo
                }));
                window.location = '/#/admin/dashboard';
                // const orderShopperId = window.localStorage.getItem('order_shopper_id');
                // const orderProcess = window.localStorage.getItem('order_process');
                //
                // if (!orderProcess) {
                //     window.location = '/#/';
                // } else {
                //     window.location = '/payment.php';
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


    render() {
        return (
            <div className={this.props.classes.root}>
                <div className={this.props.classes.wrap}>
                    <div className={this.props.classes.wrapcontent}>
                        <div className={this.props.classes.title}>DRIZZLE</div>
                        <div className={this.props.classes.subtitle}>welcome to Merchant Portal</div>
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
                        <Button raised className={this.props.classes.button} onClick={this.login.bind(this)}>Login</Button>
                        <Grid container style={{fontSize: 11, marginBottom: 45}}>
                            <Grid item xs={6}>
                                <MyLinkStyled href="#" className={this.props.classes.link}>Forgot
                                    password?</MyLinkStyled>
                            </Grid>
                            <Grid item xs={6} style={{textAlign: 'right'}}>
                                <MyLinkStyled href="/#/admin/sign-up" className={this.props.classes.link}>New here? Sign
                                    Up</MyLinkStyled>
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
                    message={<span id="message-id">Error</span>}
                />
            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(Login));
