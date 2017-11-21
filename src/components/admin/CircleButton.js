import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

import styles from '../theme/components/CircleButton';


function CircleButton(props) {

    const { children, classes, className,  ...other } = props;

    return (
        <div
            className={classNames(
                classes.root,
                className,
            )}
            {...other}
            >
                <div className={classes.bgButton}>
                    {children}
                </div>
        </div>

    );
}

CircleButton.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
};

export default withStyles(styles)(CircleButton);
