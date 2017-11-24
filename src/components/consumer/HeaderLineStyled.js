import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import styles from '../../theme/consumer/components/HeaderLineStyled';

class HeaderLineStyled extends React.Component {

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

HeaderLineStyled.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
};

export default withStyles(styles)(HeaderLineStyled);