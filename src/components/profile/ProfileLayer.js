import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import ProfileCareer from './ProfileCareer'
import ProfileDetail from './ProfileDetail'

const styles = theme => ({

  grid: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary, 
  },
});

const ProfileLayer = ({classes}) => {
  
  return (
    <div className={classes.root}>
      <Grid container className={classes.grid} style={{width: '80%', margin: 'auto'}}>
          <Grid item xs={12} sm={3} >
            <ProfileCareer />
          </Grid>
          <Grid item xs={12} sm={9} >
            <ProfileDetail />
          </Grid>
          
      </Grid>
    </div>
  )

}

export default withStyles(styles)(ProfileLayer)