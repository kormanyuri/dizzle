import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../../components/bot_admin/withRoot';
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


class Settings extends React.Component {

    constructor(props){
        super(props);

        const config = new Config();

        this.state = {
            trackUrl: '',
            ask: '',
            fbId: '',
            alert: {
                open: false,
                message: ''
            },
            baseUrl: config.baseUrl,
            shopper: JSON.parse(window.localStorage.getItem('bot_admin')),

        };

        this.changeTrackUrl = this.changeTrackUrl.bind(this);
        this.changeAsk = this.changeAsk.bind(this);
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

    changeTrackUrl(e) {
        this.setState({
            trackUrl: e.target.value
        });
    };

    changeAsk(e){
        this.setState({
            ask: e.target.value
        });
    }

    changeFbId(e) {
        this.setState({
            fbId: e.target.value
        });
    }

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
                <MyAppBar title="Bot Settings" />

                <MyPaper title={this.state.shopper.name} avatar={logo}>
                    <div className={this.props.classes.titleForm}>Bot Settings</div>
                    <FormControl fullWidth className={this.props.classes.formControl}>
                        <Input
                            id="trackUrl"
                            disableUnderline="true"
                            placeholder="Track Url"
                            value={this.state.trackUrl ? this.state.trackUrl : ''}
                            onChange={e => this.changeTrackUrl(e)}
                        />
                    </FormControl>
                    <FormControl fullWidth className={this.props.classes.formControl}>
                        <Input
                            id="ask"
                            disableUnderline="true"
                            placeholder="Ask to follow bot"
                            value={this.state.ask ? this.state.ask : ''}
                            onChange={e => this.changeAsk(e)}
                        />
                    </FormControl>
                    <a className={this.props.classes.titleForm} href="https://www.messenger.com/t/227596463974806">Open Messenger</a>
                    <Button color="primary" className={this.props.classes.fullWidth} onClick={this.save.bind(this)}>Save</Button>
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

Settings.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(Settings));