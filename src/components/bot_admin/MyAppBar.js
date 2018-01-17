import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MyMenu from './MyMenu';
import Avatar1 from '../../img/admin/avatar-1.jpg';

import styles from '../../theme/admin/components/MyAppBar';


class MyAppBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            open: typeof props.open !== 'undefined' ? props.open : 'false',
            classes: typeof props.classes !== 'undefined' ? props.classes : '',
            title: typeof props.title !== 'undefined' ? props.title : '',
            shopper: JSON.parse(window.localStorage.getItem('shopper')),
        };
    }

    openMenu(){
        document.getElementById('menu').classList.add('myMenuOpen');
    }

    render(){
        let logo = this.state.shopper.logo;

        if (logo == '') {
            logo = Avatar1;
        } else {
            logo = '/backend/uploads/logos/' + logo
        }

        return (
            <div>
                <AppBar position="fixed" className={this.props.classes.appbar}>
                    <Toolbar>
                        <Typography className={this.props.classes.logo}>
                            DRIZZLE
                        </Typography>
                        <Typography className={this.props.classes.flex}>
                            {this.state.title}
                        </Typography>
                        <IconButton className={this.props.classes.close} aria-label="Menu" onClick={this.openMenu.bind(this)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 12.6973" height="12.6973" width="17"><title>Menu</title><path id="path4139" d="M1.34 0C.566 0 0 .565 0 1.27v.21c0 .706.565 1.342 1.34 1.342h14.25c.775 0 1.34-.636 1.41-1.27v-.21C17 .564 16.365 0 15.66 0H1.34zm0 4.938c-.775 0-1.34.635-1.34 1.27v.21c0 .706.565 1.34 1.34 1.34h14.25c.775 0 1.34-.634 1.41-1.27v-.21c0-.776-.635-1.34-1.34-1.34H1.34zm0 4.867c-.775 0-1.34.636-1.34 1.34v.212c0 .776.635 1.34 1.34 1.34h14.25c.775 0 1.34-.564 1.41-1.34v-.21c0-.777-.635-1.342-1.34-1.342H1.34z" fill="#bababa"/></svg>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <MyMenu avatar={logo} welcome={`Namaste, ` + this.state.shopper.name } open={this.state.open} />
            </div>
        );
    }
}

MyAppBar.propTypes = {
    classes: PropTypes.object,
    title: PropTypes.string,
};

export default withStyles(styles)(MyAppBar);