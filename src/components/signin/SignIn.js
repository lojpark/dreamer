import React,{Component} from 'react';
import BasicSignInForm from './BasicSignInForm';
import { connect } from 'react-redux';
class SignIn extends Component {
    render(){
        const { authSignInSuccess } = this.props;


        return(
            <div>
                {authSignInSuccess ?  (<p>success</p>)
                    :  <BasicSignInForm authSignInSuccess={authSignInSuccess}/> }
            </div>
        );
    };


}

const mapStateToProps= (state) =>{
    return {
        authSignInSuccess : state.auth.authSignInSuccess,
        authSignInError : state.auth.authSignInError,
        firstName: state.auth.firstName,
        lastName: state.auth.lastName,
        cards : state.auth.cards
    }
}


export default (connect(mapStateToProps,null)(SignIn));