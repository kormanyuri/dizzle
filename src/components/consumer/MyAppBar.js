import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import styles from '../../theme/consumer/components/MyAppBar';

let w=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
let menu = document.getElementById("menu");
let root = document.getElementById("root");


class MyAppBar extends React.Component {
//function MyAppBar(props) {
//    const { classes, title } = props;

    constructor(props){
       super(props);
       // console.log(props);
       this.state = {
           title: props.title
       }
    }

    componentWillReceiveProps(props){
        this.setState({
            title: props.title
        });
    }

    back(){
        window.history.back();
    }

    openMenu(){
        root.style.filter = 'blur(5px)';
        menu.style.display="block";
    }

    render(){
        const { classes, title } = this.props;

        return (
            <AppBar position="fixed" classes={{
                root: this.props.classes.root,
                positionFixed: this.props.classes.positionFixed }} className={classes.appBar}>
                <Toolbar>
                    <IconButton className={classes.backButton} onClick={() => this.back()}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="14" height="30" focusable="false"><path id="path4216" d="M8.927 0c-.487.013-.962.213-1.312.563l-7 7c-.306.306-.478.67-.543 1.035-.173.62-.044 1.324.486 1.854l7 7c.8.8 2 .7 2.6.1l.2-.2c.8-.8.7-2 0-2.7l-3.6-3.6h9.3c1.1 0 1.9-.9 2-1.8v-.3c0-1.1-.9-1.9-1.9-1.9H6.726l3.69-3.69c.8-.8.7-2 .1-2.6l-.2-.2c-.4-.4-.9-.574-1.39-.56z"></path></svg>
                    </IconButton>
                    <Typography type="title" className={classes.flex}>
                        {this.state.title}
                    </Typography>
                    <IconButton className={classes.menuButton} aria-label="Menu" onClick={() => this.openMenu()}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width={(w < 600) ? 13:24} height="30" focusable="false"><title>Menu</title><path stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeMiterlimit="10" d="M4 9h22M4 16h22M4 23h22"></path></svg>
                    </IconButton>
                </Toolbar>
            </AppBar>
        );
    }



}

MyAppBar.propTypes = {
    title: PropTypes.string,
};

export default withStyles(styles)(MyAppBar);