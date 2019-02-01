import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import tellme from'./tellme.jpg';
import avata from'./avatar.jpg';
import {Editor, EditorState} from 'draft-js';
class PostingLayoutFrom extends Component{
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }
  render(){
    return (
<div>
<MuiThemeProvider>
  <Card>
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar={avata}
    />
    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img src={tellme} alt="" />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <Editor editorState={this.state.editorState} onChange={this.onChange} />
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
  </MuiThemeProvider>
</div>
    );
  }
}


export default PostingLayoutFrom;
