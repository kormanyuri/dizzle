import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

import styles from '../../../theme/admin/components/TextGroup/TextGroupItem';


class TextGroupItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { classes, param, value } = this.props;

        return (
            <li className={classes.listItem}>
                <div className={classNames(classes.param, classes.paramAlign)}>
                    <span className={classes.paramValue}>{value}</span>
                    <span className={classes.paramProp}>{param}</span>
                </div>
            </li>
        );
    }
}

TextGroupItem.propTypes = {
    classes: PropTypes.object,
    param: PropTypes.string,
    value: PropTypes.string,
};

export default withStyles(styles)(TextGroupItem);
