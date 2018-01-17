/* eslint-disable flowtype/require-valid-file-annotation */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import {withStyles} from 'material-ui/styles';
import withRoot from '../../components/bot_admin/withRoot';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Snackbar from 'material-ui/Snackbar';

import MyLinkStyled from '../../components/bot_admin/MyLink';

import styles from '../../theme/bot_admin/pages/Login'

import axios from 'axios';
import Core from  '../../utils/Core';
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
            baseUrl: config.baseUrl,
            token: typeof props.match.params.token != 'undefined' ? props.match.params.token : null
        };

        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleClick        = this.handleClick.bind(this);
        this.updateEmail        = this.updateEmail.bind(this);
        this.updatePassword     = this.updatePassword.bind(this);
    }

    componentDidMount() {
        const token = this.state.token;

        if (token) {
            axios.post(this.state.baseUrl + 'shopper-admin/rest/login', {
                token: token
            })
                .then(response => {
                    console.log(response);

                    window.localStorage.setItem('shopper_token', response.data.token);
                    window.localStorage.setItem('shopper', JSON.stringify({
                        id: response.data.id,
                        name: response.data.name,
                        logo: response.data.image
                    }));
                    window.location = '/admin/profile';
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

                window.localStorage.setItem('bot_admin_token', response.data.token);
                window.localStorage.setItem('bot_admin', JSON.stringify({
                    id:     response.data.id,
                    name:   response.data.name,
                    logo:   response.data.image
                }));
                window.location = '/bot-admin/settings';

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
                        <div className={this.props.classes.subtitle}>welcome to notification system</div>
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
                                <MyLinkStyled href="/restore-password-step-1" className={this.props.classes.link}>
                                    Forgot password?
                                </MyLinkStyled>
                            </Grid>
                            <Grid item xs={6} style={{textAlign: 'right'}}>
                                <MyLinkStyled href="/bot-admin/sign-up" className={this.props.classes.link}>New here? Sign
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
