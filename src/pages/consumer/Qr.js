import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import withRoot from '../../components/consumer/withRoot';
import MyAppBar from '../../components/consumer/MyAppBar';
import Card, { CardContent } from 'material-ui/Card';
import QR from '../../img/consumer/qr.png';

import Auth from '../../components/Auth';
import Config from '../../Config';
import axios from 'axios';


let width=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);

const styles = theme => ({
    root: {
        minHeight: 'inherit',
        paddingTop: 55,
        paddingBottom: 44,
        height: (width>320)?scrollHeight:'100%'
    },
    card: {
        borderRadius: 6,
        boxShadow: 'none',
        backgroundColor: '#877650',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 45,
        position: 'relative',
        textAlign: 'center',
        paddingTop: 135,
        paddingBottom: 135,
    },

    cardcontent: {
        padding: '0 18px 10px'
    },
    qrwrap: {
        textAlign: 'center',
        paddingBottom: 5,
    },
    qrcode: {
        '& img': {
            display: 'inline-block',
            border: '16px solid #fff',
            borderRadius: 8
        }
    },
    text: {
        fontSize: 11,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#fff',
    },
    number: {
        fontSize: 11,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#fff',
        letterSpacing: 1.5,
        marginTop: -5,
        opacity: 0.3
    }

});

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

