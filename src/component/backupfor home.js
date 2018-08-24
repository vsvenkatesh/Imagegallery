import React, { Component } from 'react';
import Login from './login/login';
import LoginForm from './login/login'
import './App.css';
import { Link, withRouter } from "react-router-dom";

const Welcome = ({test,onSignOut})=> {

  var test2 = localStorage.getItem("session2");
var objc = JSON.parse(test2);
var final = objc[0];
console.log("object is",final);
 // var movies = JSON.parse(test2);
 var test = localStorage.getItem("test");



  // This is a dumb "stateless" component
  return (
    <div className="hello">
      Hello <strong>{test}</strong> !!!  <a id="hr" href="javascript:;" onClick={onSignOut}>Sign out</a>
      <img src="/xman.jpg"/>!!!/
    </div>
  )



}


 class ComponentA extends Component {


    handleSignIn(e) {
    e.preventDefault()
    let username = this.refs.username.value
    this.props.onSignIn(username)
  }
   render(){
      return(
           <div>
              <form onSubmit={this.handleSignIn.bind(this)}>
      
        <center><input type="text" id="txtbox" ref="username" placeholder="username" /></center>
    
        <center><button class="button">search</button></center>
      </form>
           </div>
      )
   }
}


class Home extends Component {

   signOut() {
    this.props.history.push("/");
    localStorage.clear();
  }                              


  signIn(username) {
   
    this.setState({
      user: {
        username
      }
    })
  }

	render() {
		return (
			<div>
      
				<Welcome 
             onSignOut={this.signOut.bind(this)}
             //user={this.props.location.user ? this.props.location.user.username : null}
             //onSignOut={this.signOut.bind(this)}
             //var val={this.props.location.user.username}
              //test={this.props.location.test}
            />
      </div>
		);
	}
}

export default Home;