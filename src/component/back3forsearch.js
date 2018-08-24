import React, { Component } from "react";
import Login from "./login/login";
import ReactDOM from "react-dom";
import LoginForm from "./login/login";
import "./App.css";
import Home from "./Home";
import { Link, withRouter } from "react-router-dom";
import ImageMapper from 'react-image-mapper';
import Gallery from 'react-grid-gallery';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';


const IMAGES =
[{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
}]


const Welcome = ({onSignOut})=> {
var test = localStorage.getItem("test");  
return (
  
<div className="hello">
      Hello <strong>{test}</strong> !!!/<a id="hr" href="javascript:;" onClick={onSignOut}>Sign out</a>
      </div>

  )
}


// let urls = [
//     "http://localhost:4000/public/images/rom.jpg",
//   "http://localhost:4000/public/images/rr8.jpg",
//   "http://localhost:4000/public/images/rr.jpg"
// ];
// class Hello extends React.Component {
//   constructor(props) {
//     super(props);
//     var fifa = this.props.val;
//     console.log("these are all the user values are for venkatesh", fifa);
//     var len = fifa.length;
//     console.log("leangth are", len);
//     var finals = [];
//     var i;
//     for (i = 0; i < len; i++) {
//       finals[i] = fifa[i].location;
//       console.log("location is", finals[i]);
//     }
//   }

//   render() {
//     return <div>Hello venkiii!!!</div>;
//   }
// }
class Gallery1 extends React.Component {

  renderImage(imageUrl) {
    console.log(imageUrl);
    return (
      <div className="images">
        <map name={imageUrl}><area shape="rect" coords="170 5 195 30" href="#img1"></area></map>
      <div id="wrapper">
  <img id="img1" class="img" usemap={imageUrl} src={imageUrl} height="300" width="400" />
   <a href="#" class="close"></a>
   </div>
      </div>
    );
  }

  render() {
    return (
      <div className="gallery">
        <div className="images">
          {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
        </div>
      </div>
    );
  }
}



class search extends Component {
  constructor(props){
    super(props)
    this.state={term:'',
    final:''
  }
  }

  handleSignIn(e) {
    e.preventDefault()
    let term = this.refs.username.value
    this.onChangeInput(term);
  }
  onChangeInput(term)
{
   const component=this;
console.log("username",term);
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
      console.log("Goteddddd values!!!");
    }
    component.setState({
      final:
        body
      
      
    })
  });
    
      }) 

}

signOut() {
    this.props.history.push("/");
    localStorage.clear();
  }


render() {
var example=[]
var val=this.props.location.fifa ? this.props.location.fifa : this.state.final
for(var i=0;i<val.length;i++)
{
example[i]=val[i].location;
}
console.log("example is",example);
    return (
    <div className="finalone">
    <div className="fifa">
      <Welcome 
                  onSignOut={this.signOut.bind(this)}
                />
         <form onSubmit={this.handleSignIn.bind(this)}>
      <center><input type="text" id="txtbox" ref="username" placeholder="Image" /></center>
      <center><button class="button">Search</button></center>
      </form>
      <div className="searching">
        <Gallery1
         imageUrls={example} />
         <Gallery images={IMAGES}/>
         </div>
         </div>
      </div>
    );
  }
}

export default search;
