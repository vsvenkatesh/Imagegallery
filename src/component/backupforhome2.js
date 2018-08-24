import React, { Component } from 'react';
import Login from './login/login';
import LoginForm from './login/login'
import './App.css';
import { Link, withRouter } from "react-router-dom";
import mouse from './images/xman.jpg'

//import images from './images';

const Welcome = ({test,onSignOut})=> {
//   var test2 = localStorage.getItem("session2");
// var objc = JSON.parse(test2);
// var final = objc[0];
// console.log("object is",final);
 // var movies = JSON.parse(test2);
 var test = localStorage.getItem("test");
  // This is a dumb "stateless" component
  var test33 = localStorage.getItem("images");
  //var len=test33.length;
//   var name=new Array(); 
// name[len];
// for(var i=0;i<len;i++)
// {
// var name = test33[i].location;
// console.log("location are are",name);
// }
  console.log("another location are are",test33);
  var unr="http://localhost:4000/public/images/xman.jpg";
  return (
    <div className="hello">
      Hello <strong>{test}</strong> !!!  <a id="hr" href="javascript:;" onClick={onSignOut}>Sign out</a>
      <img src={test33}></img>
    </div>

  )



}
class Home extends Component {
   
constructor(props){
    super(props);
    this.state={term:''};
  }
    handleSignIn(e) {
    e.preventDefault()
    let term = this.refs.username.value
    console.log(term);
    var data = {"username": term,
    "password": "456"};
  fetch( "http://localhost:3003/images", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
       body: JSON.stringify(data),

    })
  .then(function(response){
    return response.json()
    .then(function(body){
    if (body == "")
    {
      console.log("no values came%%%%");
      
     alert("Invalid Username");

    }
    else
    {
      console.log("Got values!!!");
var len=body.length;
var finals=new Array(); 
finals[len];
for(var i=0;i<len;i++)
{
finals[i] = body[i].location;
console.log("location are",finals[i]);
localStorage.setItem('images', finals[i]);
}
    }
  });
      })
  }
   signOut() {
    this.props.history.push("/");
    localStorage.clear();
  }

	render() {
		return (
			<div>
      
				<Welcome 
                  onSignOut={this.signOut.bind(this)}
             // user={this.props.location.user ? this.props.location.user.username : null}
             // onSignOut={this.signOut.bind(this)}
             // var val={this.props.location.user.username}
             //  test={this.props.location.test}
            />
<div id="Search">
      <form onSubmit={this.handleSignIn.bind(this)}>
        <center><input type="text" id="txtbox" ref="username" placeholder="Image" /></center>
        <center><button class="button">Search</button></center>
      </form>
      </div>
      </div>
		);
	}
}

export default Home;













else
    {
      console.log("Goteddddd values!!!");
var len=body.length;
for(var i=len;i<len;i++)
{
var finals = body[i].location;
console.log("location are",finals);
}
    }