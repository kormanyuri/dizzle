import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';

import bgCard from '../../img/consumer/bg-card.png'

let cardHeadHeight = 90;
let inButtDiam = 47;
let inButtDiam1 = (inButtDiam*57.4468085106383)/100;
let paddStatus = 5;
let fontSizeStatus = 7;

const styles = theme => ({
    root: {},
    card: {
        borderRadius: 6,
        boxShadow: 'none',
        backgroundColor: '#877650',
        marginBottom: 45,
        position: 'relative'
    },
    cardHeader: {
        minHeight: cardHeadHeight,
        backgroundImage: 'url(' + bgCard + ')',
        backgroundSize: 'cover',
        padding: 18,
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
    wrapTitle: {
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
        marginRight: 10
    },
    wrapGiftCard: {
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
        lineHeight: 1.23,
        fontSize: 9,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#fff',
        opacity: 0.3
    },
    wrapPrice: {
        marginBottom: 20
    },
    mt: {
        marginTop: 5,
    },
    wrapButton: {
        position: 'absolute',
        height: inButtDiam,
        width: inButtDiam,
        right: -inButtDiam/2 +4,
        top: cardHeadHeight-inButtDiam/2,
    },
    bgCircle: {
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

function MyCardBalance(props) {
    const { classes, name, giftCard, avatar, href } = props;

    return (
        <div>
            <Card className={classes.card}>
                <div className={classes.cardHeader}>
                    <Avatar
                        alt={name}
                        src={avatar}
                        className={classes.avatar}
                    />
                    <Typography className={classes.wrapTitle}>
                        <span className={classes.title}>{name}</span>
                    </Typography>
                </div>
                <CardContent className={classes.cardContent}>
                    <p className={classes.wrapPrice}>
                        <span className={classes.wrapGiftCard}>
                            <span className={classes.dollars}>{giftCard}</span>
                            <span className={classNames(classes.label, classes.mt)}>gift <br/>card</span>
                        </span>

                    </p>
                </CardContent>
                <div className={classes.wrapButton}>
                    <div className={classes.bgCircle}></div>
                    <IconButton className={classes.inButton} aria-label="Menu" href={href}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 18" width="8" height="10" focusable="false">
                            <path id="path4216" d="M2.096 0C1.61-.01 1.108.164.708.564l-.2.2c-.6.6-.7 1.8.1 2.6l5.563 5.56-5.607 5.61c-.8.8-.7 1.998 0 2.698l.2.2c.6.6 1.8.7 2.6-.1l7-7c.043-.042.076-.09.114-.136l.03-.03c.6-.6.702-1.8-.098-2.6l-7-7C3.06.213 2.583.013 2.095 0z" fill="#887650"/>
                        </svg>
                    </IconButton>
                </div>
            </Card>
        </div>
    );
}

MyCardBalance.propTypes = {
    classes: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    giftCard: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};

export default withStyles(styles)(MyCardBalance);