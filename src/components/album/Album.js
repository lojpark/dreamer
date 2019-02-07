import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import AlbumItem from './AlbumItem'
import Footer from '../layout/Footer'
import AlbumTop from './AlbumTop'
import AlbumTopPosting from './AlbumTopPosting'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'


const styles = theme => (
  {
  
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },

});

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Album = ({classes, posts, auth}) => {
  
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {auth.uid ? <AlbumTopPosting /> : <AlbumTop />}
        
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {posts.map(post => {
              return (
                <AlbumItem card={post.id} post={post} key={post.id}/> 
              )
            })}
          </Grid>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  //this data is from rootReducer
  if (state.firestore.ordered.posts) {
    return {
      posts: state.firestore.ordered.posts,
      auth : state.firebase.auth,
    }
  }
  else
  {
    return {
      posts: state.post.posts,
      auth : state.firebase.auth,
    }
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'posts' }
  ])
)(Album);