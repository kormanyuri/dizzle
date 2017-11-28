import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MyDialog1 from './MyDialog1';
import MyButtonType2 from './MyButtonType2';


import styles from '../../theme/plugin/components/MyAppBar';



class MyAppBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            shopper: JSON.parse(window.localStorage.getItem('shopper')),
            open: false
        };

        this.close = this.close.bind(this);
    }

    handleClickOpen() {
        this.setState({ open: true });
    }

    close(e){
        e.preventDefault();
        window.localStorage.clear();
        window.location = '/#/plugin/login/' + this.state.shopper.id;
    }

    render(){
        const { classes, title } = this.props;
        return (
            <div>
                <AppBar position="fixed" className={classes.appbar}>
                    <Toolbar>
                        <Typography className={classes.logo}>
                            DRIZZLE
                        </Typography>
                        <Typography className={classes.flex}>
                            {title}
                        </Typography>
                        <IconButton className={classes.close} onClick={this.handleClickOpen.bind(this)}>
                            <svg xmlns="http://www.w3.org/2000/svg" id="svg2" viewBox="0 0 12 12" height="12" width="12"><path id="rect4301" d="M1.242 0C.948 0 .652.112.427.337L.42.343C-.03.793-.032 1.517.417 1.97l3.974 4L.34 9.993c-.45.45-.454 1.174-.004 1.626l.006.008c.45.452 1.174.454 1.626.005l4.05-4.027 4.027 4.052c.45.452 1.175.454 1.627.005l.008-.006c.45-.45.454-1.174.005-1.626L7.658 5.978l3.998-3.973c.452-.45.455-1.175.005-1.627L11.656.37c-.45-.452-1.174-.455-1.626-.006l-4 3.976L2.054.342C1.83.116 1.535.002 1.242 0z" fill="#bababa"/></svg>
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <MyDialog1 open={this.state.open} titlecontent="Do you want to exit?!" subtitlecontent={["Do you really want", <br key="0"/>, "to exit?"]} >
                    <div className={this.props.classes.wrapsoc}>
                        <div style={{textAlign: 'center'}}>
                            <MyButtonType2 href="#" onClick={e => this.close(e)}>exit</MyButtonType2>
                        </div>
                    </div>
                </MyDialog1>
            </div>
        );
    }

}

MyAppBar.propTypes = {
    classes: PropTypes.object,
    title: PropTypes.string,
};

export default withStyles(styles)(MyAppBar);