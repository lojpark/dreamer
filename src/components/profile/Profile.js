import React from 'react';
import "./Profile.css";
import './css4.1/bootstrapcustom.min.css';
import { connect } from 'react-redux';
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import PaymentDialog from "./editPaymentForm";
import AlertDialog from "../signin/PopUpMessageLoginFail";

class Profile extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      showProfile : true,
      showEditPayment : false,

    };
    this.changeTab= this.changeTab.bind(this);
    this.editPaymentMethod = this.editPaymentMethod.bind(this);
  }

  editPaymentMethod(){
    this.setState({showEditPayment : true});
  }

  setShowEditPayment = bool =>{
    this.setState({showEditPayment:bool});
  };

  changeTab(e){
    if (e.target.id === "profile-tab") {
      this.setState({showProfile:true});
    }
    else {
      this.setState({showProfile:false})
    }
  }
  render(){
    const {lastName,firstName,cardName,cardNumber,cvv,expDate} = this.props;
    var profile = (<div className="tab-pane fade show active" id="home" role="tabpanel">
      <div className="row">
        <div className="col-md-6">
          <label>Name</label>
        </div>
        <div className="col-md-6">
          <p>{lastName} {firstName}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label>Phone</label>
        </div>
        <div className="col-md-6">
          <p>9999 9999 9999 9999</p>
        </div>
      </div>

    </div>);
    var payment = (<div className="tab-pane fade show active" id="payment-tab" role="tabpanel">
      <div className="row">
        <div className="col-md-6">
          <label>Card Name</label>
        </div>
        <div className="col-md-6">
          <p>{cardName ? cardName : " "} </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label>Card number</label>
        </div>
        <div className="col-md-6">
          <p> {cardNumber ? cardNumber : " "}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label>Expirate Date</label>
        </div>
        <div className="col-md-6">
          <p> {expDate ? expDate : " "}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label>CVV</label>
        </div>
        <div className="col-md-6">
          <p>{cvv ? cvv : " "} </p>
        </div>
      </div>
    </div>);

    return (
        <div >
          <script src="https://unpkg.com/react/umd/react.production.js" crossOrigin/>

          <script
              src="https://unpkg.com/react-dom/umd/react-dom.production.js"
              crossOrigin
          />

          <script
              src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
              crossOrigin
          />

          {this.state.showEditPayment ? <PaymentDialog setEditPayment={this.setShowEditPayment}/> : <div/>}

          <script>var Alert = ReactBootstrap.Alert;</script>
          <div className="bootstrapiso">

            <div className="container emp-profile">
            <form  >
              <div className="row">
                <div className="col-md-4">
                  <div className="profile-img">
                    <img
                        src="https://www.gravatar.com/avatar/05b6d7cc7c662bf81e01b39254f88a49?d=identicon"
                        alt=""/>
                    <div className="file btn btn-lg btn-primary">
                      Change Photo
                      <input type="file" name="file"/>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="profile-head">
                    <h5>
                      {firstName} {lastName}
                    </h5>
                    <h6>
                      Web Developer and Designer
                    </h6>
                    <p className="proile-rating"/>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab"  role="tab"
                            onClick={this.changeTab}>About</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="payment-tab" data-toggle="tab"  role="tab"
                            onClick={this.changeTab}>Payment methods</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-2">
                  <ButtonToolbar>
                    <Button
                        variant="primary"
                        onClick={() => this.setState({ showEditPayment: true })}
                    >
                      Payment Method
                    </Button>
                  </ButtonToolbar>


                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="profile-work">
                    <p>WORK LINK</p>
                    <a href="">Website Link</a><br/>
                    <a href="">Bootsnipp Profile</a><br/>
                    <a href="">Bootply Profile</a>
                    <p>SKILLS</p>
                    <a href="">Web Designer</a><br/>
                    <a href="">Web Developer</a><br/>
                    <a href="">WordPress</a><br/>
                    <a href="">WooCommerce</a><br/>
                    <a href="">PHP, .Net</a><br/>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="tab-content profile-tab" id="myTabContent">

                    {this.state.showProfile === true ? profile : payment}
                  </div>
                </div>
              </div>
            </form>
         </div>
        </div>

        </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    email : state.auth.email,
    firstName: state.auth.firstName,
    lastName: state.auth.lastName,
    cardName : state.auth.cardName,
    cardNumber : state.auth.cardNumber,
    expDate : state.auth.expDate,
    cvv : state.auth.cvv
  }
};

export default connect(mapStateToProps,null)(Profile);
