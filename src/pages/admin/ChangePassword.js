import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { FormControl} from 'material-ui/Form';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';
import withRoot from '../../components/admin/withRoot';
import MyPaper from '../../components/admin/MyPaper';
import MyAppBar from '../../components/admin/MyAppBar';

import Avatar1 from '../../img/admin/avatar-1.jpg';

import styles from '../../theme/admin/pages/ChangePassword';


class ChangePassword extends React.Component {

    render(){
        return(
            <div>
                <MyAppBar
                    title="change password"
                />
                <MyPaper title="Namaste, Starbucks" avatar={Avatar1}>
                    <div className={this.props.classes.titleForm}>change password</div>
                    <FormControl fullWidth className={this.props.classes.formControl}>
                        <Input
                            id="Passw"
                            type="password"
                            disableUnderline="true"
                            placeholder="New password"
                        />
                    </FormControl>
                    <FormControl fullWidth className={this.props.classes.formControl}>
                        <Input
                            id="RetypePassw"
                            type="password"
                            disableUnderline="true"
                            placeholder="Retype new password"
                        />
                    </FormControl>
                    <Button color="primary" className={this.props.classes.fullWidth} href="#profile">Save</Button>
                </MyPaper>
            </div>
        );
    }
}

ChangePassword.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(ChangePassword));