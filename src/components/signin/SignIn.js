import React,{Component} from 'react';
import BasicSignInForm from './BasicSignInForm';
import { connect } from 'react-redux';

class SignIn extends Component {
    render(){
        const { auth } = this.props;

        return(
            <div>
                {auth.uid ?  <p>success</p>  :  <BasicSignInForm /> }
            </div>
        );
    };
}

const mapStateToProps= (state) =>{
    return {
        auth : state.firebase.auth,
    }
};


export default (connect(mapStateToProps,null)(SignIn));