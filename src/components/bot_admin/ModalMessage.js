import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Dialog, {
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';

import styles from '../../theme/admin/components/ModalMessage'


class ModalMessage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            classes: typeof props.classes !== 'undefined' ? props.classes : '',
            open: typeof props.open !== 'undefined' ? props.open : false,
            children: typeof props.children !== 'undefined' ? props.children : '',
        };
    }

    componentWillReceiveProps(props) {
        this.setState({
            open: typeof props.open !== 'undefined' ? props.open : false,
        });
    };

    render() {
        return (
            <div>
                <Dialog className={this.props.classes.dialog} open={this.state.open}>
                    <DialogTitle className={this.props.classes.dialogTitle}></DialogTitle>
                    <DialogContent className={this.props.classes.dialogContent}>
                        {this.state.children}
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

ModalMessage.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(ModalMessage);