import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

class PaymentRegisterForm extends React.Component {
  handleChange = (e) => {
    this.props.callbackFromParent(e);
  };
  render() {
    const { cardName, cardNumber, cvv, expDate } = this.props.card;
    console.log(this.props.card);
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Payment method
          </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardName"
              name="cardName"
              label="Name on card"
              fullWidth
              value={cardName}
              onChange={this.handleChange} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              name="cardNumber"
              label="Card number"
              fullWidth
              value={cardNumber}
              onChange={this.handleChange} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="expDate"
              name="expDate"
              label="Expiry date"
              fullWidth
              value={expDate}
              onChange={this.handleChange} />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              name="cvv"
              label="CVV"
              value={cvv}
              helperText="Last three digits on signature strip"
              onChange={this.handleChange}
              fullWidth
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default PaymentRegisterForm;
