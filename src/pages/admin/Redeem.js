import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../../components/admin/withRoot';
import MyPaper from '../../components/admin/MyPaper';
import MyAppBar from '../../components/admin/MyAppBar';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';

import Avatar1 from '../../img/admin/avatar-1.jpg';

import styles from '../../theme/admin/pages/Redeem';

import Auth from '../../components/Auth';
import Config from '../../Config';
import axios from 'axios';


class Redeem extends React.Component {
    constructor(props){
        super(props);
        const config = new Config();

        this.state = {
            baseUrl: config.baseUrl,
            alert: {
                open: false,
                message: <span id="message-id">Error</span>
            },
            shopper: JSON.parse(window.localStorage.getItem('shopper')),
            token:   window.localStorage.getItem('shopper_token')
        }
    }

    selectQR(e){
        e.preventDefault();
        this.fileInput.click();
    }

    uploadQR(e){
        let fileObject = e.target.files[0];
        let formData = new FormData();
        formData.append('qr_file', fileObject);
        console.log(formData);

        this.setState({
            alert: {
                open: true,
                message: <span id="message-id">Please wait for finish upload...</span>
            }
        });

        axios.post(this.state.baseUrl + 'shopper-admin/rest/redeem-decode-qr', formData, {
            headers: { 'content-type': 'multipart/form-data' },
            params: {
                token: this.state.token
            }
        })
            .then(response => {
                console.log(response);

                if (response.data.consumerId != '') {
                    window.location = '/admin/redeem-step-1/' + response.data.consumerId + '/' + response.data.balanceId;
                } else {
                    this.setState({
                        alert: {
                            open: true,
                            message: <span id="message-id">This QR can't decode, please create photo low quality</span>
                        }
                    })
                }
                // let shopper = this.state.shopper;
                // shopper.logo = response.data[0];
                // this.setState({
                //     shopper: shopper
                // });
                // window.localStorage.setItem('shopper', JSON.stringify(this.state.shopper));
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
                <MyAppBar title="redeem" />
                <MyPaper title={`Namaste, ` + this.state.shopper.name} avatar={logo}>
                    <input type="file" name="qr_file" id="qr_file" style={{ visibility: 'hidden' }} ref={input => {this.fileInput = input}} onChange={e => this.uploadQR(e)}/>
                    <div className={this.props.classes.scanArea} onClick={e => this.selectQR(e)}></div>
                    <div className={this.props.classes.text}>
                        tap SCAN to start scanning <br/>your QR code
                    </div>
                    <Button color="primary" className={this.props.classes.fullWidth} href="#" onClick={e => this.selectQR(e)}>Scan</Button>
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

Redeem.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(Redeem));