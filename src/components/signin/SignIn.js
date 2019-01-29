import React,{Component} from 'react';
import BasicSignInForm from './BasicSignInForm';
import { connect } from 'react-redux';

class SignIn extends Component {
    render(){
        const { authSignInSuccess,authSignInError } = this.props;


        return(
            <div>
                {authSignInSuccess ?  <p>Success</p>  :  <BasicSignInForm authSignInError={authSignInError}/> }
            </div>
        );
    };


}

const mapStateToProps= (state) =>{
    return {
        authSignInSuccess : state.auth.authSignInSuccess,
        authSignInError : state.auth.authSignInError
    }
}


export default (connect(mapStateToProps,null)(SignIn));