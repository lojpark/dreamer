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
import { increaseVote, increaseCheer } from '../../store/actions/voteActions'
import { firestoreConnect } from 'react-redux-firebase'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const styles = theme => ({
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
  author: {
    color: '#777777',
    fontSize: 18
  }
});

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

class Album extends React.Component {
  state = {
    viewPost: null,
    open: false,
  };

  // Get post from child (AlbumItem)
  myCallback = (dataFromChild) => {
    this.setState({
      viewPost: dataFromChild,
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  }

  handleCheer = () => {
    this.props.increaseCheer(this.state.viewPost);
    this.setState({
      open: false
    })
  }

  handleVote = () => {
    this.props.increaseVote(this.state.viewPost);
    console.log(this.state.userResult)
    //if(this.state.userResult === 'ALREADY_VOTED')
    this.setState({
      open: false
    });
    
    console.log('popup end')
  }
  /*
  componentWillReceiveProps = ({ userResult }) => {
    if (userResult) {
      this.setState({
        popupOpen: true,
        popupContent: userResult,
        userresult: ''
      })
      //  alert(userResult);
      //  this.props.resetUserResult(); //reset so alert does not show up twice
    }
  }*/

  render() {
    const { classes, posts, auth } = this.props;
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
                  <AlbumItem card={post.id} post={post} key={post.id} callbackFromParent={this.myCallback} />
                )
              })}
            </Grid>
          </div>

          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            scroll='paper'
            aria-labelledby="scroll-dialog-title"
          >
            <DialogTitle id="scroll-dialog-title">
              { this.state.viewPost ? this.state.viewPost.title : '' }
              <div className={classes.author}>
                { this.state.viewPost ? this.state.viewPost.authorFirstName : '' }
                &nbsp;
                { this.state.viewPost ? this.state.viewPost.authorLastName : '' }
              </div>
            </DialogTitle>
            <DialogContent>
              <DialogContentText dangerouslySetInnerHTML={
                  { __html: (this.state.viewPost ? this.state.viewPost.content : '') }
                }>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Close
              </Button>
              <Button onClick={this.handleCheer} color="primary">
                Cheer
              </Button>
              <Button onClick={this.handleVote} color="primary">
                Vote
              </Button>
            </DialogActions>
          </Dialog>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  //this data is from rootReducer
  if (state.firestore.ordered.posts) {
    return {
      userResult: state.user.userResult,
      posts: state.firestore.ordered.posts,
      auth: state.firebase.auth,
    }
  }
  else {
    return {
      userResult: state.user.userResult,
      posts: state.post.posts,
      auth: state.firebase.auth,
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increaseVote: (post) => dispatch(increaseVote(post)),
    increaseCheer: (post) => dispatch(increaseCheer(post))
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'posts' }
  ])
)(Album);