import React, { Component } from "react";
import "./App.css";
import ReactDOM from "react-dom";
import cancel from './cancelsign.svg';


class signup extends React.Component {

handleSignIn(number) { 
    const component = this; 
    console.log(number);   
    let fname = this.refs.fname.value
    let lname = this.refs.lname.value
    let email=this.refs.email.value
    let password=this.refs.password.value
    

    var img = {
      fname: fname,
      lname: lname,
      email: email,
      password: password
    };
    fetch("http://localhost:3008/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(img)
    }).then(function(response) {      
    return response.json()
  });
   this.props.history.push("/");

  }
  close() {
this.props.history.push("/");

  }

  render() {
    return (

      <div class="container">
      <div className='signup_div'>
              <img src={cancel} onClick={this.close.bind(this)} className="cancel" alt="logo" />
      <h3 id="signup_txts"><font id="signup_font" color="black">Register</font></h3>
        <form className="signupform" onSubmit={this.handleSignIn.bind(this)}>
         <label>Firstname</label><center><input type="text" id="signuptxt1" ref="fname" placeholder="Firstname" /></center>
        <label>Lastname</label><center><input type="password" id="signuptxt2" ref="lname" placeholder="Lastname" /></center>
        <label>Email</label><center><input type="text" id="signuptxt3" ref="email" placeholder="Email" /></center>
        <label>Password</label><center><input type="password" id="signuptxt4" ref="password" placeholder="Password" /></center>
         <center><button id="signup_bttn">Register</button></center>
         <p id="para">Already user</p>
          <button className="signupbutt" onClick={this.close.bind(this)}>Login</button>
        </form>
        </div>
      </div>
    );
  }
}


export default signup;