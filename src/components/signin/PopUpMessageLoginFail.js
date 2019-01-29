import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AlertDialog extends React.Component {
    constructor(props){
        super(props);
        this.state = {open : true , setOpen : false };
        this.handleClose = this.handleClose.bind(this);

    }
    handleClose() {
            this.setState({open:false});
        }

        render() {
            return (
                <div>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">alert</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                The username and password you entered did not match our records. Please double-check and try again.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Disagree
                            </Button>
                            <Button onClick={this.handleClose} color="primary" autoFocus>
                                Agree
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            );
        }
}
export default AlertDialog;