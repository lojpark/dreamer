import React,{Component} from 'react';
import './BasicSignInForm.css';
class BasicSignInForm extends Component {
    render(){
        return(
            <div>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                <style type="text/css">
                </style>
                <div className="login-form">
                    <form action="/examples/actions/confirmation.php" method="post">
                        <h2 className="text-center">Log in</h2>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Username" required="required" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" required="required" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block">Log in</button>
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
export default BasicSignInForm;
