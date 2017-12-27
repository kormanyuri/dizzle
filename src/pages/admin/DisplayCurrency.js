import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../../components/admin/withRoot';
import MyPaper from '../../components/admin/MyPaper';
import MyAppBar from '../../components/admin/MyAppBar';
import Button from 'material-ui/Button';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';

import Avatar1 from '../../img/admin/avatar-1.jpg';

import styles from '../../theme/admin/pages/DisplayCurrency';

import Auth from '../../components/Auth';
import Config from '../../Config';
import axios from 'axios';

class DisplayCurrency extends React.Component {

    constructor(props){
        super(props);
        const config = new Config();

        this.state ={
            currency: 'USD',
            baseUrl: config.baseUrl,
            shopper: JSON.parse(window.localStorage.getItem('shopper'))
        };

        this.changeCurrency = this.changeCurrency.bind(this);
    }

    componentWillMount(){

        axios.get(this.state.baseUrl + 'gift-card/rest/shopper/' + this.state.shopper.id)
            .then(response => {
                //console.log(response.data.socialDataProfile.country);
                this.setState({
                    currency: typeof response.data.socialDataProfile.currency != 'undefined' ? response.data.socialDataProfile.currency : ''
                });
            })
            .catch(error => {

            });
    }

    changeCurrency(e) {
        this.setState({
            currency: e.target.value
        });

        let shopper = this.state.shopper;
        shopper.currency = e.target.value;
        this.setState({
            shopper: shopper
        });

        window.localStorage.setItem('shopper', JSON.stringify(shopper));
    };

    save(){
        axios.post(this.state.baseUrl + 'gift-card/rest/shopper/' + this.state.shopper.id, {
            currency:    this.state.currency,
        })
            .then(response => {
                window.location = '/admin/profile'
            })
            .catch(error => {

            });
        //redirect to /#/admin/profile
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
                <MyAppBar title="display currency" />
                <MyPaper title={`Namaste, ` + this.state.shopper.name} avatar={logo}>
                    <div className={this.props.classes.titleForm}>Display currency</div>
                    <FormControl className={this.props.classes.formControl}>

                        <Select
                            value={this.state.currency}
                            onChange={e => this.changeCurrency(e)}
                            displayEmpty
                            className={this.props.classes.capitalize}
                            disableUnderline="true"
                        >
                            <MenuItem value={`USD`}>$ United states dollar</MenuItem>
                            <MenuItem value={`CAD`}>$ Canadian dollar</MenuItem>
                        </Select>
                    </FormControl>

                    <Button color="primary" className={this.props.classes.fullWidth} onClick={this.save.bind(this)}>Save</Button>
                </MyPaper>
            </div>
        );
    }
}

DisplayCurrency.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(DisplayCurrency));