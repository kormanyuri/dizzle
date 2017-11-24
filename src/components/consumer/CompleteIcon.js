import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import styles from '../../theme/consumer/components/CompleteIcon';

let h = 14;
let w = 23;

class CompleteIcon extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        const { classes, className } = this.props;

        return (
            <div
                className={classNames(
                    classes.root,
                    className,
                )}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 11" width={w} height={h} focusable="false">
                    <path id="path4216"
                          d="M17.905 2.096c.012-.487-.163-.988-.563-1.388l-.2-.2c-.6-.6-1.798-.7-2.598.1L8.98 6.17 3.375.564c-.8-.8-2-.7-2.7 0l-.2.2c-.6.6-.7 1.8.1 2.6l7 7c.043.043.092.076.138.114l.03.03c.6.6 1.8.702 2.6-.098l7-7c.35-.35.55-.826.563-1.314z"
                          fill="#fff"/>
                </svg>
            </div>
        );
    }
}

CompleteIcon.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
};

export default withStyles(styles)(CompleteIcon);
