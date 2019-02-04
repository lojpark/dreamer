import React from 'react';

import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";

import './AlbumTopPosting.css'

class AlbumTopPosting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	content: '',
        }
    }

    updateContent = (value) => {
        this.setState({content:value})
    }
    /**
     * @property Jodit jodit instance of native Jodit
     */
	jodit;
	setRef = jodit => this.jodit = jodit;
	
	config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/
	}
    render() {
        return (
            <div className="posting">
                <input type="text" className="title" value="Title"/>
                <JoditEditor
                    editorRef={this.setRef}
                    value={this.state.content}
                    config={this.config}
                    onChange={this.updateContent}
                />
            </div>
        );
    }
}

export default AlbumTopPosting