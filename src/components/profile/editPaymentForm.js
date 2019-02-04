import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import {changePayment} from "../../store/actions/ChangePaymentActions";
import connect from "react-redux/es/connect/connect";

class PaymentDialog extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open : true ,
            setOpen : false ,
                cardName : '',
                cardNumber : '',
                expDate : '',
                cvv : ''
        };

    }

    handleClose = () => {
        this.setState({open:false});
        this.props.setEditPayment(false);
        console.log(this.state);
    };

    changeMethod = () => {
        this.props.changePayment(this.state,this.props.uid);

    };

    handleChange = (e) =>{
        this.setState({ [e.target.id] : e.target.value});
    };
    render() {
        return (
            <div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">Edit Payment</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">

                            <Grid container spacing={24}>
                                <Grid item xs={12} md={6}>
                                    <TextField required id="cardName" name="cardName" label="Name on card" fullWidth onChange={this.handleChange}/>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField required id="cardNumber" name="cardNumber" label="Card number" fullWidth onChange={this.handleChange}/>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField required id="expDate" name="expDate" label="Expiry date" fullWidth onChange={this.handleChange}/>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        required
                                        id="cvv"
                                        name="cvv"
                                        label="CVV"
                                        helperText="Last three digits on signature strip"
                                        onChange={this.handleChange}
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.changeMethod} color="primary" autoFocus>
                            Edit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        uid : state.auth.uid
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changePayment: (UserPayment,uid) => dispatch(changePayment(UserPayment,uid))
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(PaymentDialog);