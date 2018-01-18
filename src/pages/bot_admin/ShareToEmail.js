import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../../components/bot_admin/withRoot';
import Grid from 'material-ui/Grid';
import MyPaper from '../../components/bot_admin/MyPaper';
import MyAppBar from '../../components/bot_admin/MyAppBar';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Snackbar from 'material-ui/Snackbar';

import Avatar1 from '../../img/bot_admin/avatar-1.jpg';

import styles from '../../theme/bot_admin/pages/StoreAddress';

import Auth from '../../components/Auth';
import Config from '../../Config';
import Core from  '../../utils/Core';
import axios from 'axios';


class ShareToEmail extends React.Component {

    constructor(props){
        super(props);

        const config = new Config();

        this.state = {
            email: '',
            alert: {
                open: false,
                message: ''
            },
            baseUrl: config.baseUrl,
            shopper: JSON.parse(window.localStorage.getItem('bot_admin')),

        };

        this.changeEmail = this.changeEmail.bind(this);

    }

    componentWillMount(){
        axios.get(this.state.baseUrl + 'gift-card/rest/shopper/' + this.state.shopper.id)
            .then(response => {
                this.setState({
                    trackUrl:    typeof response.data.socialDataProfile.trackUrl != 'undefined' ? response.data.socialDataProfile.trackUrl : '',
                    ask:         typeof response.data.socialDataProfile.ask != 'undefined' ? response.data.socialDataProfile.ask : '',
                    fbId:        typeof response.data.socialDataProfile.fbId != 'undefined' ? response.data.socialDataProfile.fbId : '',
                });
                console.log(this.state);
            })
            .catch(error => {

            });
    }

    changeEmail(e) {
        this.setState({
            trackUrl: e.target.value
        });
    };


    save(){
        console.log(this.state);
        //redirect to /#/admin/profile
        axios.post(this.state.baseUrl + 'gift-card/rest/shopper/' + this.state.shopper.id, {
            trackUrl:    this.state.trackUrl,
            ask:      this.state.ask,
            fbId: this.state.fbId
        })
            .then(() => {
                //window.location = '/bot-admin/profile';
                this.setState({
                    alert: {
                        open: true,
                        message: 'Save successful'
                    }
                });

                setTimeout(() => {
                    this.setState({
                        alert: {
                            open: false,
                            message: ''
                        }
                    });
                }, 3000);
            })
            .catch(error => {

            });
    }

    render(){

        let logo = this.state.shopper.logo;

        if (logo == '') {
            logo = Avatar1;
        } else {
            logo = '/backend/uploads/logos/' + logo
        }

        return(
            <div>
                <MyAppBar title="Share to email" />

                <MyPaper title={this.state.shopper.name} avatar={logo}>
                    <div className={this.props.classes.titleForm}>Share to email</div>
                    <FormControl fullWidth className={this.props.classes.formControl}>
                        <Input
                            id="trackUrl"
                            disableUnderline="true"
                            placeholder="Email"
                            value={this.state.email ? this.state.email : ''}
                            onChange={e => this.changeEmail(e)}
                        />
                    </FormControl>
                    <Button color="primary" className={this.props.classes.fullWidth} onClick={this.save.bind(this)}>Share</Button>
                </MyPaper>
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

ShareToEmail.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(ShareToEmail));