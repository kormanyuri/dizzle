import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../../components/admin/withRoot';
import MyPaper from '../../components/admin/MyPaper';
import MyAppBar from '../../components/admin/MyAppBar';
import Button from 'material-ui/Button';

import Avatar1 from '../../img/admin/avatar-1.jpg';

import styles from '../../theme/admin/pages/Redeem';


class Redeem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            shopper: JSON.parse(window.localStorage.getItem('shopper'))
        }
    }
    render(){
        return(
            <div>
                <MyAppBar
                    title="redeem"
                />
                <MyPaper title={`Namaste, ` + this.state.shopper.name} avatar={Avatar1}>
                    <div className={this.props.classes.scanArea}></div>
                    <div className={this.props.classes.text}>
                        tap SCAN to start scanning <br/>your QR code
                    </div>
                    <Button color="primary" className={this.props.classes.fullWidth} href="#redeem-step-1">Scan</Button>
                </MyPaper>
            </div>
        );
    }
}

Redeem.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(Redeem));