/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import withRoot from '../../components/admin/withRoot';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Snackbar from 'material-ui/Snackbar';

import MyLinkStyled from '../../components/admin/MyLink';

import styles from '../../theme/admin/pages/SignUp'


class SignUp extends Component {

  state = {
    open: false,
  };

  render() {
    return (
        <div className={this.props.classes.root}>
          <div className={this.props.classes.wrap}>
            <div className={this.props.classes.wrapcontent}>
              <div className={this.props.classes.title}>DRIZZLE</div>
              <div className={this.props.classes.subtitle}>welcome to Merchant Portal</div>
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
                  <MyLinkStyled href="#" className={this.props.classes.link}>Already have an account? Log In!</MyLinkStyled>
                </Grid>
              </Grid>

            </div>

          </div>
          <Snackbar
              className={this.props.classes.message}
              anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
              open={true}
              onRequestClose={this.handleRequestClose}
              SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
              message={<span id="message-id">Error</span>}
          />
        </div>
    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(SignUp));
