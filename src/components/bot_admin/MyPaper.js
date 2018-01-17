import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';

import styles from '../../theme/admin/components/MyPaper';


class MyPaper extends React.Component {

    constructor(props){
        super(props);
    }


    render() {
        const { children, classes, className, title, avatar,  ...other } = this.props;
        return (
            <div className={classes.root}>
                <div
                    className={classNames(
                        className,
                    )}
                    {...other}
                >
                    <div className={classes.header}>
                        <Avatar
                            src={avatar}
                            className={classes.avatar}
                        />
                        <span className={classes.title}>{title}</span>
                    </div>
                    <div className={classes.content}>
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

MyPaper.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
    title: PropTypes.string,
    avatar: PropTypes.string,
};

export default withStyles(styles)(MyPaper);
