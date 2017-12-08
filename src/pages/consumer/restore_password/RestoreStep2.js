/* eslint-disable flowtype/require-valid-file-annotation */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import {withStyles} from 'material-ui/styles';
import withRoot from '../../../components/consumer/withRoot';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';


import styles from '../../../theme/consumer/pages/Login';

import axios from 'axios';
import Config from '../../../Config';
import UploadAva from '../../../img/admin/upload-ava.png';

class RestoreStep2 extends Component {

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

        this.handleRequestClose     = this.handleRequestClose.bind(this);
    };

    handleRequestClose() {
        this.setState({
            open: false,
        });
    };

    updateEmail(e) {
        this.setState({
            email: e.target.value
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
                    //console.log(response);
                    window.localStorage.setItem('token', response.data.token);
                    window.localStorage.setItem('consumer', JSON.stringify({
                        id: response.data.id,
                        name: typeof response.data.user.name != 'undefined' ? response.data.user.name : '',
                        image: typeof response.data.user.image != 'undefined' && response.data.user.image != '' ? response.data.user.image : UploadAva
                    }));
                    // const orderShopperId = window.localStorage.getItem('order_shopper_id');
                    // const orderProcess = window.localStorage.getItem('order_process');
                    window.location = '/';
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


    componentWillMount(){
        window.localStorage.clear();
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
                            <Button raised className={this.props.classes.button} onClick={this.login.bind(this)}>Send Restore</Button>

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


export default withRoot(withStyles(styles)(RestoreStep2));