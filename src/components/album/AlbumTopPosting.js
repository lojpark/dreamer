import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { createPost } from '../../store/actions/postActions';

import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";

import './AlbumTopPosting.css'

const styles = theme => ({
    buttons: {
        display: 'flex',
        justifyContent: 'center',
    },
    button: {
        marginTop: theme.spacing.unit,
        marginLeft: theme.spacing.unit,
    },
  });

class AlbumTopPosting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            thumbnailImage: '',
            thumbnailContent: '',
        }
    }

    updateTitle = (value) => {
        this.setState({ title: value })
    }
    updateContent = (value) => {
        this.setState({
            content: value,
            thumbnailContent: this.jodit.getEditorText().substring(0, 100) + "..."
        })

        var left = this.state.content.split('<img src="');
        // If content contains image
        if (left.length > 1) {
            // Extract image
            var image = left[1].split('"')[0];
            
            this.setState({
                thumbnailImage: image,
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.createPost(this.state);
        this.setState({
            title: '',
            content: ''
        })
    };

    /**
     * @property Jodit jodit instance of native Jodit
     */
	jodit;
	setRef = jodit => this.jodit = jodit;
	
	config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/
	}
    render() {
        const { classes } = this.props;
        return (
            <div className="posting">
                <input
                    type="text"
                    className="title"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={e => this.updateTitle(e.target.value)}
                />
                <JoditEditor
                    editorRef={this.setRef}
                    value={this.state.content}
                    config={this.config}
                    onChange={this.updateContent}
                />
                <div className={classes.buttons}>
                    <Button className={classes.button} variant="contained" color="primary" onClick={this.handleSubmit}>
                        Share your dream
                    </Button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => dispatch(createPost(post))
    }
}

export default withStyles(styles)(connect(null, mapDispatchToProps)(AlbumTopPosting))