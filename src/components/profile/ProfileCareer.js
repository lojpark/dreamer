import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import EditCareer from './EditCareer'
import { deleteCareer } from '../../store/actions/userActions'
import { compose } from 'redux'
import { connect } from 'react-redux'

const styles = theme => ({
    img: {
        margin: '0 auto',
        width: '100%',

    },
    section: {
        paddingTop: '1rem',
        paddingBottom: '1rem',
        textAlign: 'left',
        margin: 'auto',
    },
    title: {
        fontSize: 16,
    },
    root: {
        padding: '1rem',
        maxWidth: 250,
        margin: 'auto',
    },
    padding: {
        marginLeft: theme.spacing.unit,
    }

})

class ProfileCareer extends Component {
    state = {
        isEditing: false,
    }
    handleEdit = () => {
        this.setState({ isEditing: true });
    }
    handleFinishEdit = () => {
        this.setState({ isEditing: false });
    }
    render() {
        const { classes, user } = this.props;
        return (
            <div className={classes.root}>
                <img src="https://www.gravatar.com/avatar/05b6d7cc7c662bf81e01b39254f88a49?d=identicon" alt="profile"
                    className={classes.img}
                />

                <Button variant="contained" color="primary" fullWidth={true}>Change profile</Button>
                <div style={{ paddingTop: '1rem', paddingBottom: '1rem' }} >
                    <Divider />
                </div>

                <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>{`${user.firstName} ${user.lastName}`}</Typography>
                {user.careers && user.careers.map((career, idx) => {
                    return (
                        <Typography variant="body1" key={idx} >
                            {career}
                            {this.state.isEditing ? (
                                <Button color="secondary" size="small" className={classes.padding} onClick={() => this.props.deleteCareer(idx)}>
                                    Delete
                                </Button>
                            ) : (null)}
                        </Typography>
                    )
                })}
                <p />
                {this.state.isEditing ? (
                    <EditCareer finishEdit={this.handleFinishEdit} />
                ) : (
                        <Button variant="contained"
                            style={{ color: 'grey', paddingTop: 2, paddingBottom: 2 }}
                            onClick={this.handleEdit}
                            fullWidth={true}
                        >
                            Edit
                      </Button>
                    )}


            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        deleteCareer: (idx) => dispatch(deleteCareer(idx)),   
    }
}
export default compose(
    withStyles(styles),
    connect(null, mapDispatchToProps),
)(ProfileCareer)