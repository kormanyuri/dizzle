import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { FormControl} from 'material-ui/Form';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';
import withRoot from '../../components/admin/withRoot';
import MyPaper from '../../components/admin/MyPaper';
import MyAppBar from '../../components/admin/MyAppBar';
import Snackbar from 'material-ui/Snackbar';

import Avatar1 from '../../img/admin/avatar-1.jpg';

import styles from '../../theme/admin/pages/ChangePassword';

import Auth from '../../components/Auth';
import Config from '../../Config';
import axios from 'axios';

class ChangePassword extends React.Component {
    constructor(props){
        super(props);

        const config = new Config();

        this.state = {
            password: null,
            retryPassword: null,
            alert: {
                open: false,
                message: <span id="message-id">Error</span>
            },
            baseUrl: config.baseUrl,
            shopper: JSON.parse(window.localStorage.getItem('shopper'))
        };

        this.updatePassword = this.updatePassword.bind(this);
        this.updateRetryPassword = this.updateRetryPassword.bind(this);
    }

    updatePassword(e){
        this.state.password = e.target.value;
    }

    updateRetryPassword(e){
        this.state.retryPassword = e.target.value;
    }

    save(){
        if (this.state.password == '' || !this.state.password) {
            this.setState({
                alert: {
                    open: true,
                    message: 'Please fill fields'
                }
            });

        } else {

            if (this.state.password == this.state.retryPassword) {

                axios.post(this.state.baseUrl + 'gift-card/rest/shopper/' + this.state.shopper.id, {
                    password: this.state.password,
                    retryPassword: this.state.retryPassword
                })
                    .then(response => {
                        //redirect to /#/admin/profile
                        window.location = '/#/admin/profile';
                    })
                    .catch(error => {

                    });

            } else {
                this.setState({
                    alert: {
                        open: true,
                        message: 'Password and Retry Password not equals'
                    }
                });

            }
        }

        if (this.state.alert.open) {
            setTimeout(() => {
                this.setState({
                    alert: {
                        open: false
                    }
                });
            }, 3000);
        }
    }

    render(){
        return(
            <div>
                <MyAppBar title="change password" />
                <MyPaper title={`Namaste, ` + this.state.shopper.name} avatar={Avatar1}>
                    <div className={this.props.classes.titleForm}>change password</div>
                    <FormControl fullWidth className={this.props.classes.formControl}>
                        <Input
                            id="Passw"
                            type="password"
                            disableUnderline="true"
                            placeholder="New password"
                            onChange={e => this.updatePassword(e)}
                        />
                    </FormControl>
                    <FormControl fullWidth className={this.props.classes.formControl}>
                        <Input
                            id="RetypePassw"
                            type="password"
                            disableUnderline="true"
                            placeholder="Retype new password"
                            onChange={e => this.updateRetryPassword(e)}
                        />
                    </FormControl>
                    <Button color="primary" className={this.props.classes.fullWidth} onClick={this.save.bind(this)}>Save</Button>
                    <Snackbar
                        className={this.props.classes.message}
                        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                        open={this.state.alert.open}
                        onRequestClose={this.handleRequestClose}
                        SnackbarContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        message={<span id="message-id">{this.state.alert.message}</span>}
                    />
                </MyPaper>
            </div>
        );
    }
}

ChangePassword.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(ChangePassword));