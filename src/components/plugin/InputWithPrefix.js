import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import styles from '../../theme/plugin/components/InputWithPrefix';

class InputWithPrefix extends React.Component {

    constructor(props){
        super(props);
        //console.log(props);
        this.state = {
            classes: '',
            val: typeof props.val !== 'undefined' ? props.val : '25',
            type: typeof props.type !== 'undefined' ? props.type : 'text',
            prefix: typeof props.prefix !== 'undefined' ? props.prefix : '',
        };
    };


    handleChange = event => {
        this.setState({ val: event.target.value });
        window.localStorage.setItem('order_amount', event.target.value * 100 );
    };

    render() {
        return (
            <div className={this.props.classes.root}>
                <div>
                    <span>{this.state.prefix}</span>
                    <input
                        type={this.state.type}
                        //placeholder={defaultValue}
                        value={this.state.val}
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        );
    }
}

InputWithPrefix.propTypes = {
    type: PropTypes.string.isRequired,
    prefix: PropTypes.string.isRequired,
    classes: PropTypes.object,
    className: PropTypes.string,
};

export default withStyles(styles)(InputWithPrefix);
