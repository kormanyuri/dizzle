import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../../components/admin/withRoot';
import MyPaper from '../../components/admin/MyPaper';
import MyAppBar from '../../components/admin/MyAppBar';
import Button from 'material-ui/Button';
import MyCardDefault from '../../components/admin/MyCardDefault';
import TextGroupItem from '../../components/admin/TextGroup/TextGroupItem';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl} from 'material-ui/Form';
import ModalMessage from '../../components/admin/ModalMessage';
import Snackbar from 'material-ui/Snackbar';

import Avatar1 from '../../img/admin/avatar-1.jpg';

import styles from '../../theme/admin/pages/RedeemStep1';

import Auth from '../../components/Auth';
import Config from '../../Config';
import axios from 'axios';


class RedeemStep1 extends React.Component {

    constructor(props){
        super(props);

        const config = new Config();

        this.state = {
            baseUrl:        config.baseUrl,
            spent:          0,
            consumerId:     props.match.params.consumerId,
            consumer:       null,
            balance:        null,
            consumerName:   '',
            balanceId:      props.match.params.balanceId,
            shopper:        JSON.parse(window.localStorage.getItem('shopper')),
            open:           typeof props.open !== 'undefined' ? props.open : false,
            alert: {
                open: false,
                message: <span id="message-id">Error</span>
            },
        };

        this.closeMessage = this.closeMessage.bind(this);
    }

    componentWillMount(){

        axios.get(this.state.baseUrl + 'gift-card/rest/consumer/' + this.state.consumerId)
            .then(response => {
                this.setState({
                    consumer: response.data,
                    consumerName: response.data.socialDataProfile.nickname
                });
            })
            .catch(error => {

            });

        axios.get(this.state.baseUrl + 'gift-card/rest/shopper-balance/' + this.state.balanceId)
            .then(response => {
                this.setState({
                    balance:     response.data
                });
            })
            .catch(error => {

            });
    }

    spentAmountChange(e) {
        this.setState({
            spent: e.target.value
        });
    };

    closeMessage(){
        this.setState({ open: false });
        document.location.href='#/admin/redeem';
    };

    doneClickOpen() {

        if (this.state.balance.balance > 0 && this.state.balance.balance >= this.state.spent) {

            axios.post(this.state.baseUrl + 'shopper-admin/rest/redeem-approve', {
                balanceId: this.state.balanceId,
                spentAmount: this.state.spent
            })
                .then(response => {
                    console.log(response);
                    let balance = this.state.balance;
                    balance.balance = response.data.balance;

                    this.setState({
                        open: true,
                        balance: balance
                    });

                    console.log(this.state.balance);
                    setTimeout(() => {
                        this.closeMessage();
                    }, 3000);
                })
                .catch(error => {

                });
        } else {
            this.setState({
                alert: {
                    open: true,
                    message: <span id="message-id">Insufficient balance</span>
                }
            });
        }
    };

    render(){
        return(
            <div>
                <MyAppBar title="redeem" />
                <MyPaper title={`Namaste, ` + this.state.shopper.name} avatar={Avatar1}>
                    <MyCardDefault>
                        <ul style={{listStyleType: 'none', margin: 0, padding: 0, color: '#fff'}}>
                            <TextGroupItem param="Customer name" value={this.state.consumerName} />
                            <TextGroupItem param="Member ID" value={this.state.consumerId} />
                            <TextGroupItem param="Store Credit Balance" value={(this.state.balance ? this.state.balance.balance / 100 : 0) + ` USD`} />
                        </ul>
                        <FormControl fullWidth className={this.props.classes.formControl}>
                            <InputLabel htmlFor="spent" className={this.props.classes.label}>Spent</InputLabel>
                            <Input
                                id="spent"
                                className={this.props.classes.labelInputInline}
                                disableUnderline="true"
                                value={this.state.spent}
                                onChange={e => this.spentAmountChange(e)}
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            />
                        </FormControl>
                    </MyCardDefault>
                    <Button color="primary" className={this.props.classes.fullWidth} onClick={this.doneClickOpen.bind(this)}>Done</Button>
                    <ModalMessage open={this.state.open}>
                        <div className={this.props.classes.messageContent}>Customer Name's New Gift <br/>Card balance is { this.state.balance ? this.state.balance.balance : 0}</div>
                    </ModalMessage>
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

RedeemStep1.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(RedeemStep1));