import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import MyPaper from '../components/MyPaper';
import MyAppBar from '../components/MyAppBar';
import Button from 'material-ui/Button';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';

import Avatar1 from '../img/avatar-1.jpg';

import styles from '../theme/pages/DisplayCurrency';


class DisplayCurrency extends React.Component {

    state = {
        currency: '',
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render(){
        return(
            <div>
                <MyAppBar
                    title="display currency"
                />
                <MyPaper title="Namaste, Starbucks" avatar={Avatar1}>
                    <div className={this.props.classes.titleForm}>Display currency</div>
                    <FormControl className={this.props.classes.formControl}>

                        <Select
                            value={this.state.currency}
                            onChange={this.handleChange('currency')}
                            displayEmpty
                            className={this.props.classes.capitalize}
                            disableUnderline="true"
                        >
                            <MenuItem value="">$ United states dollar</MenuItem>
                            <MenuItem value={'RUB'}>₽   Russian Ruble</MenuItem>
                        </Select>
                    </FormControl>

                    <Button color="primary" className={this.props.classes.fullWidth} href="#profile">Save</Button>
                </MyPaper>
            </div>
        );
    }
}

DisplayCurrency.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(DisplayCurrency));