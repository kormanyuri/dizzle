import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../../components/admin/withRoot';
import MyPaper from '../../components/admin/MyPaper';
import MyAppBar from '../../components/admin/MyAppBar';

import Avatar1 from '../../img/admin/avatar-1.jpg';

import styles from '../../theme/admin/pages/SmsInfo';


class SmsInfo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            shopper: JSON.parse(window.localStorage.getItem('shopper'))
        }
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
                <MyAppBar title="sms info" />
                <MyPaper title={`Namaste, ` + this.state.shopper.name} avatar={logo}>
                    <div className={this.props.classes.titleForm}>How it works with SMS</div>
                    <div className={this.props.classes.rowStep}>
                        <span className={this.props.classes.numberStep}>1</span>
                        <span className={this.props.classes.textStep}>Customer send a restaurant code to our SMS number.</span>
                    </div>
                    <div className={this.props.classes.rowStep}>
                        <span className={this.props.classes.numberStep}>2</span>
                        <span className={this.props.classes.textStep}>Customer will receive a gift card buy link.</span>
                    </div>
                    <div className={this.props.classes.rowInfo}>
                        Your Restaurant code is {this.state.shopper.id} <br/><br/>
                        SMS number is +1(604) 332-6662
                    </div>
                </MyPaper>
            </div>
        );
    }
}

SmsInfo.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(SmsInfo));