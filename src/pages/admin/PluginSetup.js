import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../../components/admin/withRoot';
import MyPaper from '../../components/admin/MyPaper';
import MyAppBar from '../../components/admin/MyAppBar';
import CopyToClipboard from 'react-copy-to-clipboard';
import Avatar1 from '../../img/admin/avatar-1.jpg';
import Snackbar from 'material-ui/Snackbar';

import styles from '../../theme/admin/pages/PluginSetup';

import Auth from '../../components/Auth';
import Config from '../../Config';
import axios from 'axios';

class PluginSetup extends React.Component {

    constructor(props){
        super(props);
        const config = new Config();

        this.state = {
            baseUrl: config.baseUrl,
            alert: {
                open: false,
                message: ''
            },
            shopper: JSON.parse(window.localStorage.getItem('shopper'))
        }

        this.onCopySourceToClipboard = this.onCopySourceToClipboard.bind(this);
    }

    goToPlugin(){
        window.open(window.location.origin + '/plugin/gift-cards-list/' + this.state.shopper.id, '_blank');
    }

    onCopySourceToClipboard(){
        //console.log('sdo');
        this.setState({
            alert: {
                open: true,
                message: 'Source code copy to clipboard'
            }
        });

        setTimeout(() => {
            this.setState({
                alert: {
                    open: false,
                    message: 'Source code copy to clipboard'
                }
            });
        }, 3000)
    }

    render(){
        let logo = this.state.shopper.logo;

        if (logo == '') {
            logo = Avatar1;
        } else {
            logo = '/backend/uploads/logos/' + logo
        }

        return(
            <div>
                <MyAppBar title="plugin setup" />
                <MyPaper title={`Namaste, ` + this.state.shopper.name} avatar={logo}>
                    <div className={this.props.classes.titleForm}>How to setup Plugin</div>
                    <div className={this.props.classes.rowStep}>
                        <span className={this.props.classes.numberStep}>1</span>
                        {/*<input type="hidden" name="sourceCode" value={`<a href="https://drizzle.jjpanda.com/plugin/gift-cards-list/`+ this.state.shopper.id +`">Drizzle Plugin</a>`}/>*/}
                        <span className={this.props.classes.textStep}>
                            Place this code <CopyToClipboard text={`<a href="https://drizzle.jjpanda.com/plugin/gift-cards-list/`+ this.state.shopper.id + `">Drizzle Plugin</a>`} onCopy={this.onCopySourceToClipboard}><button>source code</button></CopyToClipboard> to your website
                        </span>
                    </div>
                    <div className={this.props.classes.rowStep}>
                        <span className={this.props.classes.numberStep}>2</span>
                        <span className={this.props.classes.textStep}>Your website will display this button</span>
                        <span className={this.props.classes.wrapFakeBtn} style={{cursor: 'pointer'}} onClick={this.goToPlugin.bind(this)}>
                            <span className={this.props.classes.fakeBtn}>Gift Card Group Buy</span>
                        </span>
                    </div>
                    <div className={this.props.classes.rowStep}>
                        <span className={this.props.classes.numberStep}>3</span>
                        <span className={this.props.classes.textStep}>Click this button. If it direct to your restaurant's Group buy page. You setup successfully.</span>
                    </div>
                </MyPaper>
                <Snackbar
                    className={this.props.classes.message}
                    anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                    open={this.state.alert.open}
                    onRequestClose={this.handleRequestClose}
                    SnackbarContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={this.state.alert.message}
                />
            </div>
        );
    }
}

PluginSetup.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(PluginSetup));