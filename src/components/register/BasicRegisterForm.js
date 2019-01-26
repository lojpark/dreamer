import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

class BagicRegisterForm extends React.Component {
  handleChange = (e) => {
    this.props.callbackFromParent(e);
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Basic information
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="E-mail address"
              onChange={this.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              onChange={this.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              onChange={this.handleChange}
              fullWidth
              autoComplete="fname"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              onChange={this.handleChange}
              fullWidth
              autoComplete="lname"
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default BagicRegisterForm;