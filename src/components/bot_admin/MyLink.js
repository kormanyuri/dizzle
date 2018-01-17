import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

import styles from '../../theme/admin/components/MyLink';


class MyLink extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        const { children, classes, className, variant, ...other } = this.props;
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
}

MyLink.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
};

export default withStyles(styles)(MyLink);
