import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

// 1. We define the styles.
const styles = theme => ({
    root: {
        fontWeight: 500,
        position: 'relative',
        zIndex: 2,
        overflow: 'hidden',
        textAlign: 'center',
        '&:before,&:after': {
            content: "''",
            display: 'inline-block',
            width: '100%',
            height: '1px',
            background: '#dbd9d6',
            zIndex: 1,
            position: 'relative',
            verticalAlign: 'middle',
            right: 15,
            margin: '0 0 0 -100%',

        },
        '&:before': {
            right: 19,
            margin: '0 0 0 -100%',
        },
        '&:after': {
            left: 19,
            margin: '0 -100% 0 0',
        },
    },

});



function HeaderLineStyled(props) {
    const { children, classes, className, ...other } = props;

    return (
        <div
            className={classNames(
        classes.root,
        className,

      )}
            {...other}
        >
            {children}
        </div>
    );
}

HeaderLineStyled.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
};

export default withStyles(styles)(HeaderLineStyled);