import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

import styles from '../theme/components/MyCardDefault';


function MyCardDefault(props) {
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

MyCardDefault.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
};

export default withStyles(styles)(MyCardDefault);
