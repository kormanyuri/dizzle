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
            baseUrl: config.baseUrl,
            spent: '',
            shopper: JSON.parse(window.localStorage.getItem('shopper')),
            open: typeof props.open !== 'undefined' ? props.open : false,
        };

        this.closeMessage = this.closeMessage.bind(this);
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    closeMessage(){
        this.setState({ open: false });
        document.location.href='#redeem';
    };

    handleClickOpen() {
        this.setState({ open: true });
        setTimeout(()=>{
            this.closeMessage();
        }, 3000);
    };

    render(){
        return(
            <div>
                <MyAppBar
                    title="redeem"
                />
                <MyPaper title={`Namaste, ` + this.state.shopper.name} avatar={Avatar1}>
                    <MyCardDefault>
                        <ul style={{listStyleType: 'none', margin: 0, padding: 0, color: '#fff'}}>
                            <TextGroupItem param="Customer name" value="Jack Hidinks" />
                            <TextGroupItem param="Member ID" value="33010091" />
                            <TextGroupItem param="Store Credit Balance" value="97.12 USD" />
                        </ul>
                        <FormControl fullWidth className={this.props.classes.formControl}>
                            <InputLabel htmlFor="spent">Spent</InputLabel>
                            <Input
                                id="spent"
                                className={this.props.classes.labelInputInline}
                                disableUnderline="true"
                                value={this.state.spent}
                                onChange={this.handleChange('spent')}
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            />
                        </FormControl>
                    </MyCardDefault>
                    <Button color="primary" className={this.props.classes.fullWidth} onClick={this.handleClickOpen.bind(this)}>Done</Button>
                    <ModalMessage open={this.state.open}>
                        <div className={this.props.classes.messageContent}>Customer Name's New Gift <br/>Card balance is XXX</div>
                    </ModalMessage>
                </MyPaper>
            </div>
        );
    }
}

RedeemStep1.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(RedeemStep1));