import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import styles from '../../../theme/consumer/components/TextGroup/TextGroup';


class TextGroup extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        const { groupName, children, classes, className } = this.props;

        return (
            <div
                className={classNames(
                    classes.root,
                    className,
                )}
            >
                <div className={classes.groupName}>{groupName}</div>
                <ul className={classes.list}>
                    {children}
                </ul>

            </div>
        );
    }
}

TextGroup.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    groupName: PropTypes.string,
};

export default withStyles(styles)(TextGroup);
