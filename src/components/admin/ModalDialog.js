import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Dialog, {
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';

import styles from '../../theme/admin/components/ModalDialog'

class ModalDialog extends React.Component {

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
            children: typeof props.children !== 'undefined' ? props.children : '',
        });
    };

    handleRequestClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <Dialog className={this.props.classes.dialog} open={this.state.open}>
                    <DialogTitle className={this.props.classes.dialogTitle}>
                        <Grid container className={this.props.classes.wrapTitle}>
                            <Grid item xs={9}></Grid>
                            <Grid item xs={3} style={{textAlign: 'right'}}>
                                <div className={this.props.classes.wrapButton}>
                                    <div className={this.props.classes.bgCircle}></div>
                                    <IconButton className={this.props.classes.inButton} aria-label="Menu" onClick={this.handleRequestClose}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7.000141" height="6.9882706" viewBox="0 0 7.000141 6.9882706"><path d="M.723 0C.553 0 .38.065.25.196L.244.2c-.263.262-.264.684-.002.948l2.314 2.33L.197 5.82c-.26.263-.264.684 0 .947l.002.005c.26.264.682.265.946.003L3.504 4.43 5.85 6.79c.262.263.684.264.947.003l.005-.003c.262-.262.265-.684.003-.947L4.46 3.483 6.788 1.17c.264-.263.265-.685.003-.948L6.79.217c-.262-.264-.683-.265-.947-.003L3.513 2.53 1.196.2C1.066.07.894.004.723.003z" fill="#877650" /></svg>
                                    </IconButton>
                                </div>
                            </Grid>
                        </Grid>
                    </DialogTitle>
                    <DialogContent className={this.props.classes.dialogContent}>
                        {this.state.children}
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

ModalDialog.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(ModalDialog);