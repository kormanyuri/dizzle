import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

import styles from '../../theme/plugin/components/MyButtonType2';

class MyButtonType2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            href: props.href
        }
    }

    componentWillReceiveProps(props) {
        console.log(props);
        this.setState({
            href: props.href
        });
    }

    render(){
        const { children, classes, href, ...other } = this.props;
        return (
            <Button
                className={classNames(
                    classes.root
                )}
                href={this.state.href}
                {...other}
            >
                {children}
            </Button>
        );
    }

}

MyButtonType2.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
};

export default withStyles(styles)(MyButtonType2);
