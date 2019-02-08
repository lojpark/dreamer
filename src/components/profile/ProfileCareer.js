import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

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
    }

})

class ProfileCareer extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <img src="https://www.gravatar.com/avatar/05b6d7cc7c662bf81e01b39254f88a49?d=identicon" alt="profile"
                    className={classes.img}
                />

                <Button variant="contained" color="primary" fullWidth={true}>Change profile</Button>
                <div style={{ paddingTop: '1rem', paddingBottom: '1rem' }} >
                    <Divider />
                </div>

                <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>Name</Typography>
                <Typography variant="body1">Career</Typography>
                <Typography variant="body1">Career1</Typography>
                <Typography variant="body1">Career2</Typography>
                <Typography variant="body1">Career3</Typography>

                <p />
                <Button variant="contained" style={{color: 'grey', paddingTop: 2, paddingBottom: 2}} fullWidth={true}>Edit</Button>
            </div>
        )
    }
}

export default withStyles(styles)(ProfileCareer)