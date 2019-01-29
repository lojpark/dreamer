import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import tellme from'./tellme.jpg';
import avata from'./avatar.jpg';


const CardExampleWithAvatar = () => (
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
    <CardText>
      This is a layout test
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
  </MuiThemeProvider>
);

export default CardExampleWithAvatar;
