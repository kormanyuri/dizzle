import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../../components/consumer/withRoot';
import MyAppBar from '../../components/consumer/MyAppBar';
import TextField from 'material-ui/TextField';
import classNames from 'classnames';
import Card, { CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import UploadAva from '../../img/consumer/upload-ava.png';

import Auth from '../../components/Auth';
import Config from '../../Config';
import axios from 'axios';


let paddStatus = 5;
let fontSizeStatus = 7;

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
        height: 49,
        backgroundColor: '#fff',
    },
    rightCol: {
        marginLeft: 80,
        marginTop: -68,
        padding: '24px 0 24px',
    },
    row: {
        color: '#fff',
        marginBottom: theme.spacing.unit * 2
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
        position: 'absolute',
        right: 10,
        top: 34,

    },
    connectedStatus: {
        backgroundColor: '#77bf5e',
    },
    textFieldRoot: {
        padding: 0,
        'label + &': {
            marginTop: theme.spacing.unit * 4,
        },
    },
    textFieldInput: {
        borderRadius: 4,
        background: theme.palette.common.white,
        border: '1px solid #fff',
        fontSize: 11,
        fontWeight: 500,
        textTransform: 'uppercase',
        padding: '15px 10px',
        marginBottom: theme.spacing.unit * 2,
        color: 'rgba(136,118,80,0.7)',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
    textFieldInputDisabled: {
        background: 'transparent',
        color: 'rgba(255,255,255,0.7)'
    },
    textFieldFormLabel: {
        fontSize: 14.66666,
        fontWeight: 'bold',
        color: '#fff',
        textTransform: 'uppercase'
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
    wrapUpload: {
        position: 'relative',
        width: 49,
    },
    uploadInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
        zIndex: 100
    },

});

class EditProfile extends Component {


    constructor(props){
        super(props);
        const config = new Config();

        this.state = {
            userId:         0,
            firstName:      '',
            lastName:       '',
            email:          '',
            showLoading:    true,
            baseUrl:        config.baseUrl,
            open: false,
            message: ''
        }
    }

    componentWillMount(){
        const token = window.localStorage.getItem('token');

        if (token) {
            this.state.message = 'Load...';

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

        if (this.state.userId != 0) {
            console.log(this.state);

            return (
                <div className={this.props.classes.root}>
                    <MyAppBar title="Edit profile"/>

                    <Card className={this.props.classes.card}>
                        <CardContent className={this.props.classes.cardContent}>
                            <div className={this.props.classes.wrapUpload}>
                                <Avatar
                                    src={UploadAva}
                                    className={this.props.classes.avatar}
                                />
                                <input type="file" className={this.props.classes.uploadInput}/>
                            </div>
                            <div className={this.props.classes.rightCol}>
                                <div className={this.props.classes.row}>
                                    <TextField
                                        label="Name"
                                        value={this.state.nickname}
                                        fullWidth={true}
                                        InputProps={{
                                            disableUnderline: true,
                                            classes: {
                                                root: this.props.classes.textFieldRoot,
                                                input: this.props.classes.textFieldInput,
                                            },
                                        }}
                                        InputLabelProps={{
                                            shrink: true,
                                            className: this.props.classes.textFieldFormLabel,
                                        }}
                                    />
                                </div>
                                <div className={this.props.classes.row}>
                                    <TextField
                                        id="date"
                                        label="date of birth"
                                        type="date"
                                        defaultValue="1960-11-10"
                                        fullWidth={true}
                                        InputProps={{
                                            disableUnderline: true,
                                            classes: {
                                                root: this.props.classes.textFieldRoot,
                                                input: this.props.classes.textFieldInput,
                                            },
                                        }}
                                        InputLabelProps={{
                                            shrink: true,
                                            className: this.props.classes.textFieldFormLabel,
                                        }}
                                    />
                                </div>
                                <div className={this.props.classes.row}>
                                    <TextField
                                        disabled
                                        label="email address"
                                        defaultValue={this.state.email}
                                        fullWidth={true}
                                        InputProps={{
                                            disableUnderline: true,
                                            classes: {
                                                root: this.props.classes.textFieldRoot,
                                                input: classNames(this.props.classes.textFieldInput, this.props.classes.textFieldInputDisabled),
                                            },
                                        }}
                                        InputLabelProps={{
                                            shrink: true,
                                            className: this.props.classes.textFieldFormLabel,
                                        }}
                                    />
                                </div>
                                <div className={this.props.classes.row} style={{position: 'relative'}}>
                                    <TextField
                                        label="facebook account"
                                        defaultValue={this.state.nickname}
                                        fullWidth={true}
                                        InputProps={{
                                            disableUnderline: true,
                                            classes: {
                                                root: this.props.classes.textFieldRoot,
                                                input: this.props.classes.textFieldInput,
                                            },
                                        }}
                                        InputLabelProps={{
                                            shrink: true,
                                            className: this.props.classes.textFieldFormLabel,
                                        }}
                                    />
                                    <div
                                        className={classNames(this.props.classes.status, this.props.classes.connectedStatus)}>
                                        connected
                                    </div>
                                </div>
                                <div className={this.props.classes.row}>
                                    <div className={this.props.classes.row}>
                                        <TextField
                                            type="password"
                                            label="change password"
                                            defaultValue="Jerry Jiang"
                                            fullWidth={true}
                                            InputProps={{
                                                disableUnderline: true,
                                                classes: {
                                                    root: this.props.classes.textFieldRoot,
                                                    input: this.props.classes.textFieldInput,
                                                },
                                            }}
                                            InputLabelProps={{
                                                shrink: true,
                                                className: this.props.classes.textFieldFormLabel,
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className={this.props.classes.row}>
                                    <div className={this.props.classes.row}>
                                        <TextField
                                            disabled
                                            label="your redeem code"
                                            defaultValue={`#` + this.state.userId}
                                            fullWidth={true}
                                            InputProps={{
                                                disableUnderline: true,
                                                classes: {
                                                    root: this.props.classes.textFieldRoot,
                                                    input: classNames(this.props.classes.textFieldInput, this.props.classes.textFieldInputDisabled),
                                                },
                                            }}
                                            InputLabelProps={{
                                                shrink: true,
                                                className: this.props.classes.textFieldFormLabel,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div style={{textAlign: 'right'}}>
                                <Button className={this.props.classes.button} href="#myaccount">save changes</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            );
        } else {
            return (
                <div className={this.props.classes.root}>
                    <MyAppBar title="Edit profile"/>
                    {this.state.message}
                </div>
            );
        }
    }
}

EditProfile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(EditProfile));

