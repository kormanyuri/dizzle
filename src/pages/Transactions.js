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

import Auth from '../components/Auth';
import Config from '../Config';
import axios from 'axios';

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

class Transactions extends Component {

    constructor(props) {
        super(props);

        const config = new Config();
        this.state = {
            shopperId: props.match.params.shopperId,
            baseUrl: config.baseUrl,
            items: [],
            showLoading: false,
            open: false,
            message: ''
        };
    }

    componentWillMount(){
        this.setState({
            showLoading: true,
            message: 'Load...'
        });
        axios.get(this.state.baseUrl + 'gift-card/rest/transaction/0', {
            params: {
                shopperId: this.state.shopperId,
                method: 'LIST'
            }
        })
            .then(response => {
                console.log(response);

                if (typeof response.data.message == 'undefined') {
                    this.setState({
                        items: response.data
                    });
                } else {
                    this.setState({
                        message: 'Balance is empty'
                    });
                }
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    showLoading: false
                });
            });
    }

    render() {

        if (this.state.items.length > 0 ) {
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
                            {this.state.items.map((item, i) =>
                                <TextGroup key={i} groupName={item[0].transactionRoute == 1 ? 'Refill' : 'Reduce' }>
                                    <TextGroupItem param="date" value={item[1]}/>
                                    <TextGroupItem param="time" value={item[2]}/>
                                    <TextGroupItem param="paid" value={ item[0].transactionValue / 100 + ` usd` }/>
                                    <TextGroupItem param="type"
                                                   value={item[0].transactionRoute == 1 ? 'Refill' : 'Reduce' }/>
                                    <TextGroupItem param="previous balance" value={item[0].prevBalance / 100 + ` usd`}/>
                                    <TextGroupItem param="new balance" value={item[0].newBalance / 100 + ` usd`}/>
                                </TextGroup>
                            )}
                        </CardContent>
                    </Card>
                </div>
            );
        } else {
            return (
                <div>{this.state.message}</div>
            );
        }
    }
}

Transactions.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Transactions));

