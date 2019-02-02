import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BasicRegisterForm from './BasicRegisterForm';
import PaymentRegisterForm from './PaymentRegisterForm';
import TailorRegisterForm from './TailorRegisterForm';
import { connect } from 'react-redux';
import { register } from '../../store/actions/authActions'
import './Register.css'

const styles = theme => ({
  
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});

const steps = ['Basic information', 'Payment details', 'Tailor your experience'];



class Register extends React.Component {
  state = {
    activeStep: 0,
    email: '',
    password: '',
    firstName: '',
    lastName: '',
        cardName: '',
        cardNumber: '',
        expDate: '',
        cvv: ''
  };

  getStepContent(step) {
    switch (step) {
      case 0:
        return <BasicRegisterForm callbackFromParent={this.myCallback} />;
      case 1:
        return <PaymentRegisterForm callbackFromParent={this.myCallback}/>;
      case 2:
        return <TailorRegisterForm />;
      default:
        throw new Error('Unknown step');
    }
  }

  componentWillReceiveProps(nextProps) {
    // Go next step when success register
    if (nextProps.authSuccess) {
      this.setState(state => ({
        activeStep: state.activeStep + 1,
      }));
    }
  }


  //change register to optional. require to click to the final state .
  handleNext = (e) => {
    // Authentication
    if (this.state.activeStep === 2) {
      e.preventDefault();
      this.props.register(this.state);
    }
    else {
      this.setState(state => ({
        activeStep: state.activeStep + 1,
      }));
    }
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  // Get state from child (BasicRegisterForm)
  myCallback = (dataFromChild) => {
      this.setState({
        [dataFromChild.target.id]: dataFromChild.target.value
      })
    console.log(this.state.cards);
  };

  render() {
    const { classes, authError } = this.props;
    const { activeStep } = this.state;

    return (
      <React.Fragment>
        
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Register
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your register!
                  </Typography>
                  <Typography variant="subtitle1">
                    Now you can post your dream which will be coming true.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {this.getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={this.handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Register' : 'Next'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
            <div className="red-text center">
              { authError ? <p>{ authError }</p> : null }
            </div>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    authSuccess: state.auth.authSuccess,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    register: (newUser) => dispatch(register(newUser))
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Register));