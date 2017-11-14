/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import MyAppBar from '../components/MyAppBar';


import MyCardBalance from '../components/MyCardBalance'

import Avatar1 from '../img/avatar-1.jpg';
import Avatar2 from '../img/avatar-2.jpg';
import Avatar3 from '../img/avatar-3.jpg';

let width=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);


const styles = theme =>  ({
    root: {
        minHeight: 'inherit',
        //paddingTop: 55,
        //paddingBottom: 44,
        //height: (width>320)?scrollHeight:'100%',
        padding: '100px 15px 44px',
        minHeight: scrollHeight,
        '&>div:last-child div': {
            marginBottom: 0
        }
    },
});

class GroupBuyList extends Component {
    state = {
        open: false,
    };

    render() {

        return (
            <div className={this.props.classes.root}>
                <MyAppBar title="Balanse"/>
                <MyCardBalance
                    name="Starbucks"
                    avatar={Avatar1}
                    giftcard="$100"
                    groupbuyowner="jacky"
                    href="#ingroupbuy"
                />
                <MyCardBalance
                    name="subway"
                    avatar={Avatar2}
                    giftcard="$100"
                    groupbuyowner="yourself"
                    href="#ingroupbuy"
                />
                <MyCardBalance
                    name="mccafe"
                    avatar={Avatar3}
                    giftcard="$100"
                    groupbuyowner="Mike"
                    href="#ingroupbuy"
                />
            </div>
        );
    }
}

GroupBuyList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(GroupBuyList));
