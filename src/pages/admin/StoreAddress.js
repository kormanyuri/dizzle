import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../../components/admin/withRoot';
import MyPaper from '../../components/admin/MyPaper';
import MyAppBar from '../../components/admin/MyAppBar';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';

import Avatar1 from '../../img/admin/avatar-1.jpg';

import styles from '../../theme/admin/pages/StoreAddress';

import Auth from '../../components/Auth';
import Config from '../../Config';
import axios from 'axios';


class StoreAdress extends React.Component {

    constructor(props){
        super(props);

        const config = new Config();

        this.state = {
            country: '',
            province: '',
            city: '',
            address1: '',
            address2: '',
            postalCode: '',
            baseUrl: config.baseUrl,
            shopper: JSON.parse(window.localStorage.getItem('shopper')),

        };

        this.changeCountry = this.changeCountry.bind(this);
        this.changeProvince = this.changeProvince.bind(this);
        this.changeCity = this.changeCity.bind(this);
        this.changeAddress1 = this.changeAddress1.bind(this);
        this.changeAddress2 = this.changeAddress2.bind(this);
        this.changePostalCode = this.changePostalCode.bind(this);
    }

    changeCountry(e) {
        this.setState({
            country: e.target.value
        });
    };

    changeProvince(e){
        this.setState({
            province: e.target.value
        });
    }

    changeCity(e){
        this.setState({
            city: e.target.value
        });
    }

    changeAddress1(e){
        this.setState({
            address1: e.target.value
        });
    }

    changeAddress2(e){
        this.setState({
            address2: e.target.value
        });
    }

    changePostalCode(e){
        this.setState({
            postalCode: e.target.value
        });
    }

    save(){
        console.log(this.state);
        //redirect to /#/admin/profile
    }

    render(){
        return(
            <div>
                <MyAppBar title="store adress" />

                <MyPaper title={`Namaste, ` + this.state.shopper.name} avatar={Avatar1}>
                    <div className={this.props.classes.titleForm}>Store address</div>
                    <FormControl className={this.props.classes.formControl}>

                        <Select
                            value={this.state.country}
                            onChange={e => this.changeCountry(e)}
                            displayEmpty
                            disableUnderline="true"
                        >
                            <MenuItem value="">
                                Choose your country or region
                            </MenuItem>
                            <MenuItem value={`Canada`}>Canada</MenuItem>
                            <MenuItem value={`USA`}>USA</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth className={this.props.classes.formControl}>
                        <Input
                            id="province"
                            disableUnderline="true"
                            placeholder="State / Province"
                            onChange={e => this.changeProvince(e)}
                        />
                    </FormControl>
                    <FormControl fullWidth className={this.props.classes.formControl}>
                        <Input
                            id="City"
                            disableUnderline="true"
                            placeholder="City"
                            onChange={e => this.changeCity(e)}
                        />
                    </FormControl>
                    <FormControl fullWidth className={this.props.classes.formControl}>
                        <Input
                            id="Address1"
                            disableUnderline="true"
                            placeholder="Address 1"
                            onChange={e => this.changeAddress1(e)}
                        />
                    </FormControl>
                    <FormControl fullWidth className={this.props.classes.formControl}>
                        <Input
                            id="Address2"
                            disableUnderline="true"
                            placeholder="Address 2"
                            onChange={e => this.changeAddress2(e)}
                        />
                    </FormControl>
                    <FormControl fullWidth className={this.props.classes.formControl}>
                        <Input
                            id="PostalCode"
                            disableUnderline="true"
                            placeholder="Postal code"
                            onChange={e => this.changePostalCode(e)}
                        />
                    </FormControl>
                    <Button color="primary" className={this.props.classes.fullWidth} onClick={this.save.bind(this)}>Save</Button>
                </MyPaper>
            </div>
        );
    }
}

StoreAdress.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(StoreAdress));