import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

import styles from '../../../theme/plugin/components/TextGroup/TextGroup';

function TextGroup(props) {
    const { groupName, children, classes, className } = props;

    return (
        <div
            className={classNames(
            classes.root,
            className,
          )}
        >
            <div className={classes.groupName}>{groupName}</div>

            {children}

        </div>
    );
}

TextGroup.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    groupName: PropTypes.string,
};

export default withStyles(styles)(TextGroup);