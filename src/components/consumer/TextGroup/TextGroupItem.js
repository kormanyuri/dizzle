import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import styles from '../../../theme/consumer/components/TextGroup/TextGroupItem';


class TextGroupItem extends React.Component {
    constructor(props){
        super(props);
    }

    render() {

        const { classes, param, value } = this.props;

        return (
            <li className={classes.list__item}>
                <div className={classNames(classes.param, classes.param__align)}>
                    <span className={classes.param__value}>{value}</span>
                    <span className={classes.param__prop}>{param}</span>
                </div>
            </li>
        );
    }
}

TextGroupItem.propTypes = {
    classes: PropTypes.object.isRequired,
    param: PropTypes.string,
    value: PropTypes.string,
};

export default withStyles(styles)(TextGroupItem);
