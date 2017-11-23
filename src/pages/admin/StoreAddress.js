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

    componentWillMount(){
        axios.get(this.state.baseUrl + 'gift-card/rest/shopper/' + this.state.shopper.id)
            .then(response => {
                console.log(response.data.socialDataProfile.country);
                this.setState({
                    country:    typeof response.data.socialDataProfile.country != 'undefined' ? response.data.socialDataProfile.country : '',
                    province:   typeof response.data.socialDataProfile.state != 'undefined' ? response.data.socialDataProfile.state : '',
                    city:       typeof response.data.socialDataProfile.city != 'undefined' ? response.data.socialDataProfile.city : '',
                    address1:   typeof response.data.address != 'undefined' ? response.data.address : '',
                    address2:   typeof response.data.socialDataProfile.address2 != 'undefined' ? response.data.socialDataProfile.address2 : '',
                    postalCode: typeof response.data.socialDataProfile.postalCode != 'undefined' ? response.data.socialDataProfile.postalCode : '',
                });
                console.log(this.state);
            })
            .catch(error => {

            });
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
        axios.post(this.state.baseUrl + 'gift-card/rest/shopper/' + this.state.shopper.id, {
            country:    this.state.country,
            state:      this.state.province,
            city:       this.state.city,
            address:    this.state.address1,
            address2:   this.state.address2,
            postalCode: this.state.postalCode
        })
            .then(response => {

            })
            .catch(error => {

            });
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
                            value={this.state.province}
                            onChange={e => this.changeProvince(e)}
                        />
                    </FormControl>
                    <FormControl fullWidth className={this.props.classes.formControl}>
                        <Input
                            id="City"
                            disableUnderline="true"
                            placeholder="City"
                            value={this.state.city}
                            onChange={e => this.changeCity(e)}
                        />
                    </FormControl>
                    <FormControl fullWidth className={this.props.classes.formControl}>
                        <Input
                            id="Address1"
                            disableUnderline="true"
                            placeholder="Address 1"
                            value={this.state.address1}
                            onChange={e => this.changeAddress1(e)}
                        />
                    </FormControl>
                    <FormControl fullWidth className={this.props.classes.formControl}>
                        <Input
                            id="Address2"
                            disableUnderline="true"
                            placeholder="Address 2"
                            value={this.state.address2}
                            onChange={e => this.changeAddress2(e)}
                        />
                    </FormControl>
                    <FormControl fullWidth className={this.props.classes.formControl}>
                        <Input
                            id="PostalCode"
                            disableUnderline="true"
                            placeholder="Postal code"
                            value={this.state.postalCode}
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