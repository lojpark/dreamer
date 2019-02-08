import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import ProfileCareer from './ProfileCareer'
import ProfileDetail from './ProfileDetail'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'

const styles = theme => ({

  grid: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  },
});

const ProfileLayer = ({ classes, user }) => {
  console.log(user);
  return (
    <div className={classes.root}>
      {user &&
        <Grid container className={classes.grid} style={{ width: '80%', margin: 'auto' }}>
          <Grid item xs={false} xl={2} />
          <Grid item xs={4} xl={3} >
            <ProfileCareer user={user[0]}/>
          </Grid>
          <Grid item xs={8} xl={5} >
            <ProfileDetail user={user[0]}/>
          </Grid>
          <Grid item xs={false} xl={2} />
        </Grid>

      }
    </div>
  )

}

const mapStateToProps = state => {

  const auth = state.firebase.auth;
  return {
    auth,
    user: state.firestore.ordered['users']
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}
export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => [
    { collection: 'users', doc: props.auth.uid }
  ])
)(ProfileLayer)