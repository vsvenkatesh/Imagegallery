import React, { Component } from "react";
import "../App.css";
import ReactDOM from "react-dom";
import {render} from "react-dom";
import {withRouter} from "react-router-dom";


class LoginForm extends React.Component {

constructor() {
super()
this.state = {
      clk: null
    }

}
togglesignup() {

  this.setState({
      clk: "username"
    })
  this.props.onSignup(this.state.clk)
    
  }


  handleSignIn(e) {
var component = this
    e.preventDefault()
    
    let username = this.refs.username.value
    let password = this.refs.password.value
    localStorage.setItem("test", username); 
      var data = {"username": username,
    "password": password};
  fetch( "http://localhost:3000/login", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
       body: JSON.stringify(data),

    })
  .then(function(response){
    return response.json()
  }).then(function(body){
    if (body == "")
    {
      console.log("not a user!!!!!");
      
     alert("Invalid Username");

    }
    else 
{
  console.log("u are a user!!!!!");
   // console.log(a);
//a.push(JSON.parse(localStorage.getItem('session')));

 //console.log(five);
 localStorage.setItem('session2', JSON.stringify(body));
var fiveData = localStorage.getItem("session2");
var objc = JSON.parse(fiveData);
console.log("objc is",fiveData);
component.props.onSignIn(username)
}
    //console.log(JSON.stringify(body));

    });
    
  }  



  signOut() {
    this.props.history.push("/Home");
  }
 


  render() {
    return (


      
     
      <div id="parent">


      <div id="new">
      <form onSubmit={this.handleSignIn.bind(this)}>
      <center><h3 id="txt"><font color="white">Sign in</font></h3></center>
        <center><input type="text" id="txtboxuser" ref="username" placeholder="username" /></center>
        <center><input type="password" id="txtbox2" ref="password" placeholder="password" /></center>
         <center><p class="f1">Forgot:<a href="#">Username/Password?</a></p></center>
        <center><button class="buttonsignin">sign in</button></center>
        </form>
      <p id="para">or</p>
        <button className="signupbutt" onClick={this.togglesignup.bind(this)}>SignUp</button>
        
     </div>
      </div>
      
    )
  }
}





 



class login extends React.Component {
  
  constructor(props) {

    super(props)
   
    this.state = {
      user: null,
      news: null
    }

  }
  
  signup(clk) {

this.setState({
      news: {
        clk
      }
    })

  }
  
  signIn(username, password) {
   
    this.setState({
      user: {
        username
      }
    })
  }


 
// '{"username":"phonenumber"}': '' }


  render() {
    return (
      <div>
      
        { 

          (this.state.news) ? 
            
          this.props.history.push({
            pathname: "/signup",
            user:this.state.news
          })
          :

          (this.state.user) ? 
            
          this.props.history.push({
            pathname: "/Home",
            user:this.state.user
          })
          :
            <LoginForm 
             onSignIn={this.signIn.bind(this)} 
             onSignup={this.signup.bind(this)}
            />
        }
        
      </div>
    )
    
  }
  
}
export default login;