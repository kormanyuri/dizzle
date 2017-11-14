import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import MyAppBar from '../components/MyAppBar';
import TextGroup from '../components/TextGroup/TextGroup';
import TextGroupItem from '../components/TextGroup/TextGroupItem';
import Card, { CardContent } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Avatar1 from '../img/avatar-1.jpg';

import bgCard from '../img/bg-card.png'

let cardHeadHeight = 38;
let inButtDiam = 47;
let inButtDiam1 = (inButtDiam*57.4468085106383)/100;
let paddStatus = 5;
let fontSizeStatus = 7;

let width=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);

const styles = theme => ({
    root: {
        minHeight: 'inherit',
        paddingTop: 55,
        paddingBottom: 44,
        height: (width>320)?'auto':'100%'
    },
    card: {
        borderRadius: 6,
        boxShadow: 'none',
        backgroundColor: '#877650',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 45,
        position: 'relative'
    },
    cardheader: {
        minHeight: cardHeadHeight,
        backgroundImage: 'url(' + bgCard + ')',
        backgroundSize: '100% auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 -50px',
        padding: 18,
        marginBottom: 12,
    },
    cardcontent: {
        padding: '0 18px 10px'
    },
    avatar: {
        marginTop: -42,
        border: '3px solid #fff',
        width: 49,
        height: 49
    },
    wraptitle: {
        paddingTop: 25,
        height: 17,
        display: 'table-cell',
        verticalAlign: 'middle'
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
        textTransform: 'uppercase',
        lineHeight: 1,
        verticalAlign: 'middle',
        marginRight: 10,
        marginBottom: 25,
    },
    status: {
        display: 'inline-block',
        minWidth: 56,
        fontSize: fontSizeStatus,
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        lineHeight: 1,
        padding: paddStatus + 'px 7px',
        borderRadius: (fontSizeStatus + paddStatus*2)/2,
        textAlign: 'center',
        letterSpacing: 1.5,
        boxSizing: 'border-box',
    },
    ongoingStatus: {
        backgroundColor: '#77bf5e',
    },
    boughtStatus: {
        backgroundColor: '#6ba0dd',
    },
    expiredStatus: {
        backgroundColor: '#a4a1a1',
    },
    wrapgiftcard: {
        marginRight: 30,
    },
    dollars: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#fff',
        marginRight: 8
    },
    label: {
        display: 'inline-block',
        verticalAlign: 'top',
        lineHeight: 1.25,
        fontSize: 9,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#fff',
        opacity: 0.3
    },
    wrapprice: {
        marginBottom: 20
    },
    groupbuyowner: {
        color: '#fff',
        textTransform: 'uppercase',
        fontSize: 9,
        fontWeight: 'bold',
        lineHeight: 1.25,
        verticalAlign: 'top',
    },
    wrapbutton: {
        position: 'absolute',
        height: inButtDiam,
        width: inButtDiam,
        right: -inButtDiam/2 +4,
        top: cardHeadHeight-inButtDiam/2,
    },
    bgcircle: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        backgroundColor: '#fff',
        opacity: 0.1
    },
    inButton: {
        position: 'absolute',
        width: inButtDiam1,
        height: inButtDiam1,
        left: '50%',
        top: '50%',
        marginTop: -inButtDiam1/2,
        marginLeft: -inButtDiam1/2,
        backgroundColor: '#fff',
        textAlign: 'center',
        color: '#887650'
    }

});

class Starbucks extends Component {
    state = {
        open: false,
    };

    render() {

        return (
            <div className={this.props.classes.root}>
                <MyAppBar
                    title="Starbucks"
                />
                <Card className={this.props.classes.card}>
                    <div className={this.props.classes.cardheader}>
                        <Avatar
                            src={Avatar1}
                            className={this.props.classes.avatar}
                        />
                    </div>
                    <CardContent className={this.props.classes.cardcontent}>
                        <div className={this.props.classes.title}>
                            Starbucks
                        </div>
                        <TextGroup groupName="Group buy bought 40 USD gift card">
                            <TextGroupItem param="date" value="2017.10.11" />
                            <TextGroupItem param="time" value="05:53 pm" />
                            <TextGroupItem param="paid" value="36.00 usd" />
                            <TextGroupItem param="type" value="group buy" />
                            <TextGroupItem param="previous balance" value="2.30 usd" />
                            <TextGroupItem param="new balance" value="42.30 usd" />
                        </TextGroup>

                        <TextGroup groupName="Spent in store">
                            <TextGroupItem param="date" value="2017.10.10" />
                            <TextGroupItem param="time" value="09:12 pm" />
                            <TextGroupItem param="spend" value="47.70 usd" />
                            <TextGroupItem param="type" value="spend in store" />
                            <TextGroupItem param="previous balance" value="50.00 usd" />
                            <TextGroupItem param="new balance" value="2.30 usd" />
                        </TextGroup>

                        <TextGroup groupName="Bought 50 USD gift card">
                            <TextGroupItem param="date" value="2017.10.04" />
                            <TextGroupItem param="time" value="1:36 am" />
                            <TextGroupItem param="paid" value="50.00 usd" />
                            <TextGroupItem param="type" value="direct buy" />
                            <TextGroupItem param="previous balance" value="00.00 usd" />
                            <TextGroupItem param="new balance" value="50.00 usd" />
                        </TextGroup>

                    </CardContent>
                </Card>
            </div>
        );
    }
}

Starbucks.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Starbucks));

