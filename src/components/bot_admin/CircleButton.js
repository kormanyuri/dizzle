import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

import styles from '../../theme/admin/components/CircleButton';

import Auth from '../../components/Auth';
import Config from '../../Config';
import axios from 'axios';


class CircleButton extends React.Component {

    constructor(props){
        super(props);
    }


    render() {
        const { children, classes, className,  ...other } = this.props;

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
}

CircleButton.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
};

export default withStyles(styles)(CircleButton);
