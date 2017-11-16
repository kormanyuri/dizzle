import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import MyAppBar from '../components/MyAppBar';
import classNames from 'classnames';
import Card, { CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import Avatar4 from '../img/avatar-4.png';

import Auth from '../components/Auth';
import Config from '../Config';
import axios from 'axios';

let paddStatus = 5;
let fontSizeStatus = 7;

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
        height: scrollHeight
    },
    card: {
        borderRadius: 6,
        boxShadow: 'none',
        backgroundColor: '#877650',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 45,
        position: 'relative',

    },
    cardContent: {
        padding: '18px 18px 10px',
        '&:after': {
            content: "''",
            display: 'block',
            width: 80,
            height: '100%',
            background: 'rgba(255,255,255,0.1)',
            position: 'absolute',
            left: 0,
            top: 0,
        }
    },
    avatar: {
        //marginTop: -42,
        border: '3px solid #fff',
        width: 49,
        height: 49
    },
    rightCol: {
        marginLeft: 80,
        marginTop: -68,
        padding: '24px 18px 24px 0',
    },
    row: {
        color: '#fff',
        marginBottom: 18
    },
    param: {
        fontWeight: 'bold',
        fontSize: 11,
        textTransform: 'uppercase',
    },

    value: {
        fontWeight: 500,
        fontSize: 11,
        opacity: 0.3,
        textTransform: 'uppercase',
        '& a': {
            color: '#fff',
            fontWeight: 500,
            fontSize: 11,
            textTransform: 'uppercase',
            textDecoration: 'underline',
        }
    },
    status: {
        display: 'inline-block',
        minWidth: 56,
        fontSize: fontSizeStatus,
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        lineHeight: 1,
        padding: paddStatus + 'px 7px',
        borderRadius: (fontSizeStatus + paddStatus*2)/2,
        textAlign: 'center',
        letterSpacing: 1.5,
        boxSizing: 'border-box',
    },
    connectedStatus: {
        backgroundColor: '#77bf5e',
    },
    button: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#fff',
        padding: '10px 15px',
        borderRadius: 4,
        backgroundColor: 'rgba(255,255,255,0.1)',
        fontSize: 11,
        lineHeight: 1,
        marginBottom: 20,
    },

});

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
                            src={Avatar4}
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

