/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import withRoot from '../../components/plugin/withRoot';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';

import MyLinkStyled from '../../components/plugin/MyLink';
import HeaderLineStyled from '../../components/plugin/HeaderLineStyled';

import styles from '../../theme/plugin/pages/SignUp';

import Auth from '../../components/Auth';
import Config from '../../Config';
import axios from 'axios';

class Signup extends Component {
  state = {
    open: false,
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };



  render() {

    return (
      <div className={this.props.classes.root}>
        <div className={this.props.classes.wrapper}>
          <div className={this.props.classes.wrap}>

            <div className={this.props.classes.wrapContent}>
              <div className={this.props.classes.title}>DRIZZLE</div>
              <div className={this.props.classes.subTitle}>Buy gift card with friends and saving</div>
              <TextField
                  placeholder="Your Name"
                  fullWidth={true}
                  InputProps={{
                disableUnderline: true,
                classes: {
                  root: this.props.classes.textFieldRoot,
                  input: this.props.classes.textFieldInput,
                },
              }}
              />
              <TextField
                  placeholder="Your Email"
                  fullWidth={true}
                  InputProps={{
                disableUnderline: true,
                classes: {
                  root: this.props.classes.textFieldRoot,
                  input: this.props.classes.textFieldInput,
                },
              }}
              />
              <TextField
                  type="password"
                  placeholder="Password"
                  fullWidth={true}
                  InputProps={{
                disableUnderline: true,
                classes: {
                  root: this.props.classes.textFieldRoot,
                  input: this.props.classes.textFieldInput,
                },
              }}
              />
              <Button raised className={this.props.classes.button} href="#groupbuylist">Sign up</Button>
              <Grid container style={{fontSize: 11, marginBottom: 45, textAlign: 'center'}}>
                <Grid item xs={12} >
                  <MyLinkStyled href="#login" className={this.props.classes.link}>Already have an account? Log In!</MyLinkStyled>
                </Grid>
              </Grid>
              <HeaderLineStyled className={this.props.classes.horDivid} >or Login with</HeaderLineStyled>
              <Grid container spacing={0} style={{fontSize: 11}}>
                <Grid item xs={12} sm={6} className={this.props.classes.gridItem}>
                  <Button className={this.props.classes.btnFacebook}><span className={this.props.classes.facebookIco}></span>facebook</Button>
                </Grid>
                <Grid item xs={12} sm={6} className={this.props.classes.gridItem}>
                  <Button className={this.props.classes.btnTwitter}><span className={this.props.classes.twitter}></span>twitter</Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(Signup));
