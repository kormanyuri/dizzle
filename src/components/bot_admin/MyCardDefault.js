import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

import styles from '../../theme/admin/components/MyCardDefault';


class MyCardDefault extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        const { children, classes, className, ...other } = this.props;
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
}

MyCardDefault.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
};

export default withStyles(styles)(MyCardDefault);
