import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../../components/consumer/withRoot';
import MyAppBar from '../../components/consumer/MyAppBar';
import classNames from 'classnames';
import Card, { CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import Avatar4 from '../../img/consumer/avatar-4.png';

import styles from '../../theme/consumer/pages/MyAccount';

import Auth from '../../components/Auth';
import Config from '../../Config';
import axios from 'axios';

class MyAccount extends Component {

    constructor(props) {
        super(props);
        const config = new Config();

        this.state = {
            userId: 0,
            firstName:      '',
            lastName:       '',
            email:          '',
            showLoading:    true,
            image: Avatar4,
            baseUrl:        config.baseUrl,
            open: false
        }
    }

    componentWillMount(){
        const token = window.localStorage.getItem('token');

        if (token) {
            axios.get(this.state.baseUrl + 'gift-card/rest/consumer', {
                params: {
                    token: token
                }
            })
                .then(response => {
                    console.log(response);

                    this.setState({
                        userId: response.data.id,
                        nickname:  response.data.socialDataProfile.nickname,
                        email:     response.data.email,
                        showLoading: false,
                        image: typeof response.data.socialDataProfile.image != 'undefined' ? response.data.socialDataProfile.image : Avatar4
                    });
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    render() {

        return (
            <div className={this.props.classes.root}>
                <MyAppBar title="My account" />
                <Card className={this.props.classes.card}>
                    <CardContent className={this.props.classes.cardContent}>
                        <Avatar
                            src={this.state.image}
                            className={this.props.classes.avatar}
                        />
                        <div className={this.props.classes.rightCol}>
                            <div className={this.props.classes.row}>
                                <div className={this.props.classes.param}>Name</div>
                                <div className={this.props.classes.value}>{this.state.nickname}</div>
                            </div>
                            <div className={this.props.classes.row}>
                                <div className={this.props.classes.param}>email</div>
                                <div className={this.props.classes.value}>{this.state.email}</div>
                            </div>
                            <div className={this.props.classes.row}>
                                <div className={this.props.classes.param}>date of birth</div>
                                <div className={this.props.classes.value}>10.11.1960</div>
                            </div>
                            <div className={this.props.classes.row}>
                                <div className={this.props.classes.param}>facebook account </div>
                                <div className={classNames(this.props.classes.status,this.props.classes.connectedStatus)}>connected</div>
                            </div>
                            <div className={this.props.classes.row}>
                                <div className={this.props.classes.param}>password</div>
                                <div className={this.props.classes.value} style={{letterSpacing: 2}}>•••••••••••••••••</div>
                            </div>
                            <div className={this.props.classes.row}>
                                <div className={this.props.classes.param}>your redeem code</div>
                                <div className={this.props.classes.value} style={{letterSpacing: 2}}><a href="#qr">#{this.state.userId}</a></div>
                            </div>
                        </div>
                        <div style={{textAlign: 'right'}}>
                            <Button className={this.props.classes.button} href="#editprofile">edit profile</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

MyAccount.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(MyAccount));

