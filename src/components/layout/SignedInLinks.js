import React from 'react'
import Button from '@material-ui/core/Button'
import { signout } from "../../store/actions/SignOutActions";
import {connect} from "react-redux";
class SignedInLinks extends React.Component {
    constructor(props){
        super(props);
        this.deleteSignInInfo = this.deleteSignInInfo.bind(this);
    }
    deleteSignInInfo(){
        this.props.signout();
    }
    render(){
        return (
            <div>
                <Button color="inherit">Write your story</Button>
                <Button color="inherit">View stories</Button>
                <Button color="inherit" onClick={this.deleteSignInInfo}>Sign out</Button>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        signout: () => dispatch(signout())
    }
}
export default connect(null,mapDispatchToProps)(SignedInLinks)
