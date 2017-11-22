/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../../components/consumer/withRoot';
import MyAppBar from '../../components/consumer/MyAppBar';


import Config from '../../Config';


let width=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);


const styles = ({
    root: {
        minHeight: 'inherit',
        padding: '100px 15px 44px',
        '&>div:last-child div': {
            marginBottom: 0
        },
        fontSize: '15px'
    },
    hrefA: {
        textDecoration: 'none',
        color: 'red',
        textWeight: 'bold'
    }
});

class TestPageA extends Component {

    constructor(props){
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className={this.props.classes.root}>
                <MyAppBar title="Balance" />
                <p>Test Page A1</p>
                <a className={this.props.classes.hrefA} href="/#/test-page-b">Test B</a>
            </div>
        )
    }
}

TestPageA.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(TestPageA));
