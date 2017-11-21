import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import MyPaper from '../components/MyPaper';
import MyAppBar from '../components/MyAppBar';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';

import Avatar1 from '../img/avatar-1.jpg';

import styles from '../theme/pages/StoreAddress';


class StoreAdress extends React.Component {

    state = {
        country: '',
        province: '',
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render(){
        return(
            <div>
                <MyAppBar
                    title="store adress"
                />
                <MyPaper title="Namaste, Starbucks" avatar={Avatar1}>
                    <div className={this.props.classes.titleForm}>Store address</div>
                    <FormControl className={this.props.classes.formControl}>

                        <Select
                            value={this.state.country}
                            onChange={this.handleChange('country')}
                            displayEmpty
                            disableUnderline="true"
                        >
                            <MenuItem value="">
                                Choose your country or region
                            </MenuItem>
                            <MenuItem value={10}>Canada</MenuItem>
                            <MenuItem value={20}>USA</MenuItem>
                            <MenuItem value={30}>Austria</MenuItem>
                            <MenuItem value={11}>Canada</MenuItem>
                            <MenuItem value={22}>USA</MenuItem>
                            <MenuItem value={33}>Austria</MenuItem>
                            <MenuItem value={121}>Canada</MenuItem>
                            <MenuItem value={122}>USA</MenuItem>
                            <MenuItem value={123}>Austria</MenuItem>
                            <MenuItem value={124}>Canada</MenuItem>
                            <MenuItem value={125}>USA</MenuItem>
                            <MenuItem value={126}>Austria</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={this.props.classes.formControl}>

                        <Select
                            value={this.state.province}
                            onChange={this.handleChange('province')}
                            displayEmpty
                            className={this.props.classes.selectEmpty}
                            disableUnderline="true"
                        >
                            <MenuItem value="">
                                State / Province
                            </MenuItem>
                            <MenuItem value={10}>Canada</MenuItem>
                            <MenuItem value={20}>USA</MenuItem>
                            <MenuItem value={30}>Austria</MenuItem>
                            <MenuItem value={11}>Canada</MenuItem>
                            <MenuItem value={22}>USA</MenuItem>
                            <MenuItem value={33}>Austria</MenuItem>
                            <MenuItem value={121}>Canada</MenuItem>
                            <MenuItem value={122}>USA</MenuItem>
                            <MenuItem value={123}>Austria</MenuItem>
                            <MenuItem value={124}>Canada</MenuItem>
                            <MenuItem value={125}>USA</MenuItem>
                            <MenuItem value={126}>Austria</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth className={this.props.classes.formControl}>
                        <Input
                            id="City"
                            disableUnderline="true"
                            placeholder="City"
                        />
                    </FormControl>
                    <FormControl fullWidth className={this.props.classes.formControl}>
                        <Input
                            id="Address1"
                            disableUnderline="true"
                            placeholder="Address 1"
                        />
                    </FormControl>
                    <FormControl fullWidth className={this.props.classes.formControl}>
                        <Input
                            id="Address2"
                            disableUnderline="true"
                            placeholder="Address 2"
                        />
                    </FormControl>
                    <FormControl fullWidth className={this.props.classes.formControl}>
                        <Input
                            id="PostalCode"
                            disableUnderline="true"
                            placeholder="Postal code"
                        />
                    </FormControl>
                    <Button color="primary" className={this.props.classes.fullWidth} href="#profile">Save</Button>
                </MyPaper>
            </div>
        );
    }
}

StoreAdress.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(StoreAdress));