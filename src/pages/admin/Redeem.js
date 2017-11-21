import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import MyPaper from '../components/MyPaper';
import MyAppBar from '../components/MyAppBar';
import Button from 'material-ui/Button';

import Avatar1 from '../img/avatar-1.jpg';

import styles from '../theme/pages/Redeem';


class Redeem extends React.Component {
    render(){
        return(
            <div>
                <MyAppBar
                    title="redeem"
                />
                <MyPaper title="Namaste, Starbucks" avatar={Avatar1}>
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