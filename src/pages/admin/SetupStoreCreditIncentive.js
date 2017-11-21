import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import MyPaper from '../components/MyPaper';
import MyAppBar from '../components/MyAppBar';
import Button from 'material-ui/Button';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Grid from 'material-ui/Grid';

import Avatar1 from '../img/avatar-1.jpg';

import styles from '../theme/pages/SetupStoreCreditIncentive';


class SetupStoreCreditIncentive extends React.Component {

    state = {
        startValue: '',
        endValue: '',
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render(){
        return(
            <div>
                <MyAppBar
                    title="setup store credit"
                />
                <MyPaper title="Namaste, Starbucks" avatar={Avatar1}>
                    <div className={this.props.classes.titleForm}>setup store credit incentive</div>
                        <div>
                            <div className={this.props.classes.inputRow}>
                                <div style={{ marginRight: 33}}>
                                    <Grid container spacing={8}>
                                        <Grid item xs={6}>
                                            <FormControl className={this.props.classes.formControl}>
                                                <Select
                                                    value={this.state.startValue}
                                                    onChange={this.handleChange('startValue')}
                                                    displayEmpty
                                                    className={this.props.classes.selectEmpty}
                                                    disableUnderline="true"
                                                >
                                                    <MenuItem value="">100 USD</MenuItem>
                                                    <MenuItem value={'200'}>200 USD</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <FormControl fullWidth className={this.props.classes.formControl}>
                                                <InputLabel htmlFor="spent">Spent</InputLabel>
                                                <Input
                                                    id="spent"
                                                    className={this.props.classes.labelInputInline}
                                                    disableUnderline="true"
                                                    value={this.state.spent}
                                                    onChange={this.handleChange('spent')}
                                                    startAdornment={<InputAdornment position="start">%</InputAdornment>}
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className={this.props.classes.deleteRowBtn}>
                                    <span>-</span>
                                </div>
                            </div>
                            <div className={this.props.classes.inputRow}>
                                <div style={{ marginRight: 33}}>
                                    <Grid container spacing={8}>
                                        <Grid item xs={6}>
                                            <FormControl className={this.props.classes.formControl}>
                                                <Select
                                                    value={this.state.startValue}
                                                    onChange={this.handleChange('startValue')}
                                                    displayEmpty
                                                    className={this.props.classes.selectEmpty}
                                                    disableUnderline="true"
                                                >
                                                    <MenuItem value="">100 USD</MenuItem>
                                                    <MenuItem value={'200'}>200 USD</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <FormControl fullWidth className={this.props.classes.formControl}>
                                                <InputLabel htmlFor="spent">Spent</InputLabel>
                                                <Input
                                                    id="spent"
                                                    className={this.props.classes.labelInputInline}
                                                    disableUnderline="true"
                                                    value={this.state.spent}
                                                    onChange={this.handleChange('spent')}
                                                    startAdornment={<InputAdornment position="start">%</InputAdornment>}
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className={this.props.classes.deleteRowBtn}>
                                    <span>-</span>
                                </div>
                            </div>
                        </div>
                    <Button color="primary" className={this.props.classes.fullWidth} style={{marginBottom: 40,}}>Add line</Button>
                    <Button color="primary" className={this.props.classes.fullWidth} href="#profile">Save</Button>
                </MyPaper>
            </div>
        );
    }
}

SetupStoreCreditIncentive.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(SetupStoreCreditIncentive));