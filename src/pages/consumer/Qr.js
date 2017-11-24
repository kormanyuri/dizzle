import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import withRoot from '../../components/consumer/withRoot';
import MyAppBar from '../../components/consumer/MyAppBar';
import Card, { CardContent } from 'material-ui/Card';
import QR from '../../img/consumer/qr.png';

import styles from '../../theme/consumer/pages/Qr';

import Auth from '../../components/Auth';
import Config from '../../Config';
import axios from 'axios';



class QRqode extends Component {
    constructor(props) {
        super(props);
        const config = new Config();

        this.state = {
            userId:         '',
            firstName:      '',
            lastName:       '',
            email:          '',
            token:          window.localStorage.getItem('token'),
            showLoading:    true,
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
                        showLoading: false
                    });
                })
                .catch(error => {
                    console.log(error);
                });

        }
    }

    render() {

        return (
            <div className={this.props.classes.root}>
                <MyAppBar title="Edit profile" />

                <Card className={this.props.classes.card}>
                    <CardContent className={this.props.classes.cardcontent}>
                        <div className={this.props.classes.qrwrap}>
                            <div className={this.props.classes.qrcode}><img src={this.state.baseUrl + `gift-card/consumer-qr-generate?token=${this.state.token}`} alt=""/></div>
                        </div>
                        <p className={classNames(this.props.classes.text)} style={{marginBottom: 25}}>Your redeem QR code</p>
                        <p className={classNames(this.props.classes.text)}>Your member ID</p>
                        <p className={classNames(this.props.classes.number)}>#{this.state.userId}</p>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

QRqode.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(QRqode));

