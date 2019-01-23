import React from 'react'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'
const styles = theme => (
    {
        footer: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing.unit * 6,
          },
    }
)
const Footer = ({classes}) => {
  return (
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
  )
}

export default withStyles(styles)(Footer)
