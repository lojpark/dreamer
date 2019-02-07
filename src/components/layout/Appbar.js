import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import SignedOutLinks from './SignedOutLinks'
import SignedInLinks from './SignedInLinks'
import { Link } from 'react-router-dom'
import {connect} from "react-redux";
const styles = theme => (
    {

        appBar: {
            position: 'relative',
        },
        icon: {
            marginRight: theme.spacing.unit * 2,
        },
        grow: {
            flexGrow: 1,
        }
    }
)


class Appbar extends React.Component {
    constructor(props){
        super(props);

    }
    render(){
        const { authSignInSuccess,classes } = this.props;
        return (
            <div>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                        <CameraIcon className={classes.icon}/>
                        <Typography variant="h6" color="inherit" noWrap  component={Link} to="/" style={{textDecoration: 'none'}}>
                            Dreamer
                        </Typography>
                        <div className={classes.grow}/>
                        {authSignInSuccess ?  <SignedInLinks/> : <SignedOutLinks/>}
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

const mapStateToProps= (state) =>{
    return {
        authSignInSuccess : state.auth.authSignInSuccess,
    }
}

export default withStyles(styles)(connect(mapStateToProps,null)(Appbar))
