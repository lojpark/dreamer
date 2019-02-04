import React from 'react';

// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Require Font Awesome.
import 'font-awesome/css/font-awesome.css';

import FroalaEditor from 'react-froala-wysiwyg';

const AlbumTopPosting = () => {
    return (
        <div>
            <FroalaEditor tag='textarea'/>
        </div>
    )
}

export default AlbumTopPosting