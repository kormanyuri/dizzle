import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';

import styles from '../../theme/plugin/components/MyDialog'

class MyDialog extends React.Component {
    constructor(props){
        super(props);
        //console.log(props);
        this.state = {
            classes: '',
            open: typeof props.open !== 'undefined' ? props.open : false,
            children: typeof props.children !== 'undefined' ? props.children : '',
            titlecontent: typeof props.titlecontent !== 'undefined' ? props.titlecontent : '',
            subtitlecontent: typeof props.subtitlecontent !== 'undefined' ? props.subtitlecontent : '',
            name: typeof props.name !== 'undefined' ? props.name : '',
            avatar: typeof props.avatar !== 'undefined' ? props.avatar : '',
        };
    };

    componentWillReceiveProps(props) {
        //console.log(props);
        this.setState({
            open: typeof props.open !== 'undefined' ? props.open : false,
            name: typeof props.name !== 'undefined' ? props.name : '',
            avatar: typeof props.avatar !== 'undefined' ? props.avatar : '',
        });
    };

    handleRequestClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <Dialog className={this.props.classes.dialog} open={this.state.open} onRequestClose={this.handleRequestClose}>
                    <DialogTitle className={this.props.classes.dialogTitle}>
                        <Avatar
                            alt={this.state.name}
                            src={this.state.avatar}
                            className={classNames({[this.props.classes.avatar]: this.state.avatar!==''})}
                        />
                        <Grid container className={this.props.classes.wraptitle}>
                            <Grid item xs={9}>
                                <span className={this.props.classes.title}>{this.state.name}</span>
                            </Grid>
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
                    <DialogContent>
                        <p className={this.props.classes.titleContentDialog}>
                            {this.state.titlecontent}
                        </p>
                        <p className={this.props.classes.subTitleContentDialog}>
                            {this.state.subtitlecontent}
                        </p>
                    </DialogContent>
                    <DialogActions className={this.props.classes.wrapAction}>
                        {this.state.children}
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}


export default withStyles(styles)(MyDialog);