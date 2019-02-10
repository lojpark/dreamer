import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
      },
      heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
      },
      heroButtons: {
        marginTop: theme.spacing.unit * 4,
      },
})

const AlbumTop = ({classes}) => {
    return (
        <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Dreamer
            </Typography>
                <Typography variant="h6" align="center" color="textSecondary" paragraph>
                    Share your dream and get opportunity to make it come true.
            </Typography>
                <div className={classes.heroButtons}>
                    <Grid container spacing={16} justify="center">
                        <Grid item>
                            <Button variant="contained" color="primary">
                                &nbsp;&nbsp;Fresh Dreams&nbsp;&nbsp;
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary">
                                Achieved Dreams
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(AlbumTop)
