import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

// 1. We define the styles.
const styles = theme => ({
    root: {
        color: '#fff',
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: 3,
        position: 'relative',
        padding: '23px 25px 15px',
        marginBottom: 30,
        fontSize: 11,
        fontWeight: 500,
    },
    groupName: {
        left: 15,
        top: -19,
        padding: 9,
        display: 'inline-block',
        position: 'absolute',
        backgroundColor: '#877650',
        fontSize: 11,
        fontWeight: 'bold',
        color: '#fff'
    },
    list: {
        listStyleType: 'none',
        paddingLeft: 0,
        margin: 0,
    },


});

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
