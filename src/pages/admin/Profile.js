import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { FormControl} from 'material-ui/Form';
import withRoot from '../../components/admin/withRoot';
import MyPaper from '../../components/admin/MyPaper';
import MyAppBar from '../../components/admin/MyAppBar';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import Input from 'material-ui/Input';

import Avatar1 from '../../img/admin/avatar-1.jpg';
import UploadAva from '../../img/admin/upload-ava.png';

import styles from '../../theme/admin/pages/Profile';


class Profile extends React.Component {

    constructor(props){
        super(props);
        this.state = {

            shopper: JSON.parse(window.localStorage.getItem('shopper'))
        }
    }


    handleChange(event) {
        let shopper = this.state.shopper;
        shopper.name = event.target.value,
        this.setState({
            shopper: shopper
        })
    }

    render(){
        return(
            <div>
                <MyAppBar title="profile" />
                <MyPaper title={`Namaste, ` + this.state.shopper.name} avatar={Avatar1}>
                    <div className={this.props.classes.headContent}>
                        <div className={this.props.classes.wrapUpload}>
                            <Avatar
                                src={UploadAva}
                                className={this.props.classes.avatar}
                            />
                            <input type="file" className={this.props.classes.uploadInput} />
                        </div>
                        <span className={this.props.classes.instruction}>tap on profile image to upload photo or remove it</span>
                    </div>
                    <div className={this.props.classes.titleForm}>Store Name</div>
                    <FormControl fullWidth className={this.props.classes.formControl}>
                        <Input
                            id="storeName"
                            disableUnderline="true"
                            value={this.state.shopper.name}
                            onChange={e => this.handleChange(e)}
                        />
                    </FormControl>
                    <Button className={this.props.classes.button} href="/#/admin/change-password">CHANGE PASSWORD</Button>
                    <Button className={this.props.classes.button} href="/#/admin/store-address">STORE ADDRESS</Button>
                    <Button className={this.props.classes.button} href="/#/admin/display-currency">DISPLAY CURRENCY</Button>
                    <Button className={this.props.classes.button} href="/#/admin/store-credit-incentive">STORE CREDIT INCENTIVE</Button>
                    <Button className={this.props.classes.button} href="/#/admin/profile">DOWNLOAD SHOP’S QR CODE</Button>
                    <Button className={this.props.classes.button} href="/#/admin/plugin-setup">PLUGIN SETUP</Button>
                    <Button className={this.props.classes.button} href="/#/admin/sms-info">SMS INFO</Button>
                </MyPaper>
            </div>
        );
    }
}

Profile.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(Profile));