/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../../components/consumer/withRoot';
import MyAppBar from '../../components/consumer/MyAppBar';


import styles from '../../theme/consumer/pages/TestPageB';

import Config from '../../Config';



class TestPageB extends Component {

    constructor(props){
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className={this.props.classes.root}>
                <MyAppBar title="Balance"/>
                <p>Test Page B</p>
            </div>
        )
    }
}

TestPageB.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(TestPageB));
