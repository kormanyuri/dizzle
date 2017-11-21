import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

import styles from '../theme/components/MyLink';


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
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
};

export default withStyles(styles)(MyLink);
