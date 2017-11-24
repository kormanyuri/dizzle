import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';

import styles from '../../theme/consumer/components/MyCard';

import Auth from '../../components/Auth';
import Config from '../../Config';
import axios from 'axios';



class MyCard extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        const { classes, name, status, giftCard, sell, groupBuyOwner, avatar, href, ...other } = this.props;

        let statusWord = 'ongoing';

        switch (status) {
            case 0:
                    statusWord = 'expired';
                break;
            case 1:
                    statusWord = 'ongoing';
                break;
            case 2:
                    statusWord = 'bought';
                break;
        }

        return (
            <div>
                <Card className={classes.card} {...other}>
                    <div className={classes.cardHeader}>
                        <Avatar
                            alt={name}
                            src={avatar}
                            className={classes.avatar}
                        />
                        <Typography className={classes.wrapTitle}>
                            <span className={classes.title}>{name}</span>
                            <span
                                className={classNames(classes.status,
                                    {
                                        [classes.ongoingStatus]: status === 1,
                                        [classes.boughtStatus]: status === 2,
                                        [classes.expiredStatus]: status === 0,
                                    }
                                )}>{statusWord}</span>
                        </Typography>
                    </div>
                    <CardContent className={classes.cardContent}>

                        <p className={classes.wrapPrice}>
                        <span className={classes.wrapGiftCard}>
                            <span className={classes.dollars}>{giftCard}</span>
                            <span className={classNames(classes.label, classes.mt)}>gift <br/>card</span>
                        </span>
                            <span>
                            <span className={classes.dollars}>{sell}</span>
                            <span className={classNames(classes.label, classes.mt)}>sell</span>
                        </span>
                        </p>
                        <div>
                            <span className={classes.label}>group Buy Owner / </span>
                            <span className={classes.groupBuyOwner}> {groupBuyOwner}</span>
                        </div>

                    </CardContent>
                    <div className={classes.wrapButton}>
                        <div className={classes.bgCircle}></div>
                        <IconButton className={classes.inButton} aria-label="Menu" href={href}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 18" width="8" height="10"
                                 focusable="false">
                                <path id="path4216"
                                      d="M2.096 0C1.61-.01 1.108.164.708.564l-.2.2c-.6.6-.7 1.8.1 2.6l5.563 5.56-5.607 5.61c-.8.8-.7 1.998 0 2.698l.2.2c.6.6 1.8.7 2.6-.1l7-7c.043-.042.076-.09.114-.136l.03-.03c.6-.6.702-1.8-.098-2.6l-7-7C3.06.213 2.583.013 2.095 0z"
                                      fill="#887650"/>
                            </svg>
                        </IconButton>
                    </div>
                </Card>
            </div>
        );
    }
}

MyCard.propTypes = {
    classes: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    status: PropTypes.number.isRequired,
    giftCard: PropTypes.string.isRequired,
    sell: PropTypes.string.isRequired,
    groupBuyOwner: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};

export default withStyles(styles)(MyCard);