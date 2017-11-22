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
            currency: '',
            baseUrl: config.baseUrl,
            shopper: JSON.parse(window.localStorage.getItem('shopper'))
        }

        this.changeCurrency = this.changeCurrency.bind(this);
    }


    changeCurrency(e) {
        this.setState({
            currency: e.target.value
        });
    };

    save(){

        //redirect to /#/admin/profile
    }

    render(){
        return(
            <div>
                <MyAppBar title="display currency" />
                <MyPaper title={`Namaste, ` + this.state.shopper.name} avatar={Avatar1}>
                    <div className={this.props.classes.titleForm}>Display currency</div>
                    <FormControl className={this.props.classes.formControl}>

                        <Select
                            value={this.state.currency}
                            onChange={e => this.changeCurrency(e)}
                            displayEmpty
                            className={this.props.classes.capitalize}
                            disableUnderline="true"
                        >
                            <MenuItem value="USD">$ United states dollar</MenuItem>
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