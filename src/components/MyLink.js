import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

// 1. We define the styles.
const styles = theme => ({
    root: {
        color: 'inherit',
        textDecoration: 'underline',
        fontWeight: 500
    },

});

function MyLink(props) {
    const { children, classes} = props;

    return (
        <a className={classes.root}>
            {children}
        </a>
    );
}

MyLink.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
};

export default withStyles(styles)(MyLink);
