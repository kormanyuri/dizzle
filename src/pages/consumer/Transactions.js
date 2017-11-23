import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../../components/consumer/withRoot';
import MyAppBar from '../../components/consumer/MyAppBar';
import TextGroup from '../../components/consumer/TextGroup/TextGroup';
import TextGroupItem from '../../components/consumer/TextGroup/TextGroupItem';
import Card, { CardContent } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Avatar1 from '../../img/consumer/avatar-1.jpg';

import bgCard from '../../img/consumer/bg-card.png'

import Auth from '../../components/Auth';
import Config from '../../Config';
import axios from 'axios';

let cardHeadHeight = 38;

let width=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

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
    cardHeader: {
        minHeight: cardHeadHeight,
        backgroundImage: 'url(' + bgCard + ')',
        backgroundSize: '100% auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 -50px',
        padding: 18,
        marginBottom: 12,
    },
    cardContent: {
        padding: '0 18px 10px'
    },
    avatar: {
        marginTop: -42,
        border: '3px solid #fff',
        width: 49,
        height: 49
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
    }
});

class Transactions extends Component {

    constructor(props) {
        super(props);

        const config = new Config();
        this.state = {
            shopperId:      props.match.params.shopperId,
            shopper:        null,
            baseUrl:        config.baseUrl,
            items:          [],
            showLoading:    false,
            open:           false,
            message:        ''
        };

        this.loadShopper = this.loadShopper.bind(this);
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
                    this.loadShopper();

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

    loadShopper(){
        console.log(this.state);

        axios.get(this.state.baseUrl + 'gift-card/rest/shopper/' + this.state.shopperId, {
            params: {
                shopperId: this.state.shopperId
            }
        })
            .then(response => {
                console.log(response);

                this.setState({
                    shopper: response.data
                });

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
                    <MyAppBar title={this.state.shopper ? this.state.shopper.name : ''} />

                    <Card className={this.props.classes.card}>
                        <div className={this.props.classes.cardHeader}>
                            <Avatar
                                src={Avatar1}
                                className={this.props.classes.avatar}
                            />
                        </div>
                        <CardContent className={this.props.classes.cardContent}>
                            <div className={this.props.classes.title}>
                                {this.state.shopper ? this.state.shopper.name : ''}
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

