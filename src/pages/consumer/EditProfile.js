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

import styles from '../../theme/consumer/pages/EditProfile';

import Auth from '../../components/Auth';
import Config from '../../Config';
import axios from 'axios';


class EditProfile extends Component {


    constructor(props){
        super(props);
        const config = new Config();
        console.log('constructor');

        this.state = {
            userId:         0,
            firstName:      '',
            lastName:       '',
            email:          '',
            password:       '',
            dateOfBirth:    '',
            image:          UploadAva,
            showLoading:    true,
            baseUrl:        config.baseUrl,
            open:           false,
            message:        '',
            token:          window.localStorage.getItem('token')
        }
    }

    componentWillMount(){
        const token = window.localStorage.getItem('token');
        console.log('will mount');

        if (token) {
            this.state.message = 'Load...';

            axios.get(this.state.baseUrl + 'gift-card/rest/consumer', {
                params: {
                    token: token
                }
            })
                .then(response => {
                    // console.log(response);
                    const name = response.data.socialDataProfile.nickname.split(' ');
                    this.setState({
                        userId:         response.data.id,
                        nickname:       response.data.socialDataProfile.nickname,
                        firstName:      typeof name[0] != 'undefined' ? name[0] : '',
                        lastName:       typeof name[1] != 'undefined' ? name[1] : '',
                        email:          response.data.email,
                        dateOfBirth:    typeof response.data.socialDataProfile.dateOfBirth != 'undefined' ? response.data.socialDataProfile.dateOfBirth : '',
                        showLoading:    false,
                        image:          typeof response.data.socialDataProfile.image != 'undefined' ? response.data.socialDataProfile.image : UploadAva
                    });

                    //console.log(this.state);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    changeName(e){
        const name = e.target.value.split(' ');

        this.setState({
            firstName: typeof name[0] != 'undefined' ? name[0] : '',
            lastName:  typeof name[1] != 'undefined' ? name[1] : ''
        });
    }

    changeDateOfBirth(e){
        this.setState({
            dateOfBirth: e.target.value
        });
    }

    changePassword(e){
        this.setState({
            password: e.target.value
        });
    }

    save(){
        axios.post(this.state.baseUrl + 'gift-card/rest/consumer/0', {
            token:       this.state.token,
            firstName:   this.state.firstName,
            lastName:    this.state.lastName,
            password:    this.state.password,
            dateOfBirth: this.state.dateOfBirth,
            image:       this.state.image
        })
            .then(response => {
                //redirect to profile
            })
            .catch(error => {
                console.log(error.response.data.message);
                this.setState({
                    showLoading: false,
                    showWarningEmail: true,
                    showWarningToast: true,
                    warningToastMessage: error.response.data.message
                });

                setTimeout(() => {
                    this.setState({
                        showWarningToast: false
                    });
                }, 3000);
            });
    }

    uploadImage(e) {
        // console.log(e.target.files[0]);
        let fileObject = e.target.files[0];
        let formData = new FormData();
        formData.append('image', fileObject);
        console.log(formData);

        axios.post(this.state.baseUrl + 'image/upload/image', formData, {
            headers: { 'content-type': 'multipart/form-data' }
        })
            .then(response => {

                this.setState({
                    image: '/backend/uploads/images/' + response.data[0]
                });
            })
            .catch(error => {

            });
    }

    render() {

        console.log('render');
        console.group('card content');
        console.log(this.props.classes);
        console.groupEnd();

        if (this.state.userId != 0) {
            //console.log(this.state);

            return (
                <div className={this.props.classes.root}>
                    <MyAppBar title="Edit profile"/>

                    <Card classes={{root: this.props.classes.card}}>
                        <CardContent classes={{root: this.props.classes.cardContent}}>
                            <div className={this.props.classes.wrapUpload}>
                                <Avatar
                                    src={this.state.image}
                                    className={this.props.classes.avatar}
                                />
                                <input type="file" className={this.props.classes.uploadInput} onChange={e => this.uploadImage(e)}/>
                            </div>
                            <div className={this.props.classes.rightCol}>
                                <div className={this.props.classes.row}>
                                    <TextField
                                        label="Name"
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
                                        onChange={e => this.changeName(e)}
                                    />
                                </div>
                                <div className={this.props.classes.row}>
                                    <TextField
                                        id="date"
                                        label="date of birth"
                                        type="date"
                                        defaultValue={this.state.dateOfBirth}
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
                                        onChange={e => this.changeDateOfBirth(e)}
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
                                            defaultValue=""
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
                                            onChange={e => this.changePassword(e)}
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
                                <Button className={this.props.classes.button} onClick={this.save.bind(this)}>save changes</Button>
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

const createGenerateClassName = () => {
    let counter = 1000;

    return (rule, sheet) => `pizza--${rule.key}-${counter++}`
};

export default withRoot(withStyles(styles, {
    //withTheme: false,
    //generateClassName: createGenerateClassName()
})(EditProfile));

