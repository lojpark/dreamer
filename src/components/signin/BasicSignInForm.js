import React,{Component} from 'react';
import './BasicSignInForm.css';
import { connect } from 'react-redux';
import { signin } from "../../store/actions/authSignInActions";

//html message fail login


class BasicSignInForm extends Component {
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.login = this.login.bind(this);
        this.state = {
            email:'',
            password: ''
        }
    }

    login(e){
        e.preventDefault();
        this.props.signin(this.state);

    }
    handleChange(event){
        console.log(event);
        this.setState({[event.target.name]: event.target.value});

    }


    render(){
            const { authSignInError } = this.props;
            const PopUpMessageFailLogin =
            (<div className="alert alert-info" role="alert" styles = "top:46px">
                The username and password you entered did not match our records. Please double-check and try again.
            </div>);
        return(

            <div>

                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                <style type="text/css"></style>


                {/*check whether sign in is success or not .. and then pop up message if it fail*/}
                {authSignInError ?  <div className="alert alert-info" role="alert" styles = "top:46px"  >
                    <div className="text-center">
                    The username and password you entered did not match our records. Please double-check and try again.
                    </div>
                </div> : <div></div>}

                <div className="login-form">
                    <form onSubmit={this.login}>
                        <h2 className="text-center">Log in</h2>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Username" name="email" required="required" value={this.state.email} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" name="password" required="required" value={this.state.password} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block" >Log in</button>
                        </div>
                        <div className="clearfix">
                            <label className="pull-left checkbox-inline"><input type="checkbox"/> Remember me</label>
                            <a href="#" className="pull-right">Forgot Password?</a>
                        </div>
                    </form>
                    <p className="text-center"><a href="#">Create an Account</a></p>
                </div>
            </div>

        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signin: (User) => dispatch(signin(User))
    }
}

export default connect(null,mapDispatchToProps)(BasicSignInForm);