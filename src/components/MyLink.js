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
    const { children, classes, className, variant, ...other } = props;

    return (
        <a
            className={classNames(
        classes.root,
        className,
      )}
            {...other}
        >
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
