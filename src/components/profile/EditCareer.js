import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { addCareer } from '../../store/actions/userActions'

const styles = theme => ({
    button: {
        marginRight: theme.spacing.unit,
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    }
})
class EditCareer extends Component {
    state = {
        career: "",
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    handleAddCareer = () => {
        this.props.addCareer(this.state.career);
        this.setState({career: ""});
    }
    render() {
        const { classes, finishEdit } = this.props;
        return (
            <React.Fragment>
                <TextField 
                    label="Enter your career"
                    id="career"
                    onChange={this.handleChange}
                    value={this.state.career}
                    fullWidth = {true}
                />
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    onClick={this.handleAddCareer}
                >
                    Save
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    onClick={finishEdit}
                >
                    Cancel
                </Button>
                
            </React.Fragment>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addCareer: (career) => dispatch(addCareer(career)),
    }
}
export default compose(
    withStyles(styles),
    connect(null, mapDispatchToProps),
)(EditCareer)