/* eslint-disable flowtype/require-valid-file-annotation */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import {withStyles} from 'material-ui/styles';
import withRoot from '../../../components/consumer/withRoot';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import Grid from 'material-ui/Grid';

import MyLinkStyled from '../../../components/consumer/MyLink';
import HeaderLineStyled from '../../../components/consumer/HeaderLineStyled';

import styles from '../../../theme/consumer/pages/Login';

import axios from 'axios';
import Config from '../../../Config';
import UploadAva from '../../../img/admin/upload-ava.png';

class RestoreStep1 extends Component {

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

        if (this.state.email == '') {
            this.setState({
                alert: {
                    open: true,
                    message: <span id="message-id">Please fill fields</span>
                }
            });
        } else {
            //TODO: send request to check isset email
            //TODO: send request to restore
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
                            <Grid container style={{fontSize: 11, marginBottom: 45}}>
                                <Grid item xs={6}>
                                    <MyLinkStyled href="/login" className={this.props.classes.link}>
                                        Login
                                    </MyLinkStyled>
                                </Grid>
                                <Grid item xs={6} style={{textAlign: 'right'}}>
                                    <MyLinkStyled href="/signup" className={this.props.classes.link}>
                                        New here? Sign Up
                                    </MyLinkStyled>
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


export default withRoot(withStyles(styles)(RestoreStep1));
