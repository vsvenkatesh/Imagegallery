import React, { Component } from "react";
import "./App.css";
import Gallery from "react-grid-gallery";
import ReactDOM from "react-dom";
import tableicon from './tableicon.svg';

const Welcome = ({ onSignOut }) => {
  var test = localStorage.getItem("test");
  return (
    <div className="hellosearch">
      Hello <strong>{test}</strong> !!!/<a
        id="hr"
        href="javascript:;"
        onClick={onSignOut}
      >
        Sign out
      </a>
    </div>
  );
};


class Gallery1 extends React.Component {
  renderImage(imageUrl) {
    var len1 = imageUrl.length;
    if (imageUrl == "") {
      return (
        <img id="nores" src="http://localhost:4000/public/images/nores.png" />
      );
    }
    console.log("length is", len1);
    if (len1 > 0) {
      var thumbnailImages = [];
      console.log("imageUrl", imageUrl);
      imageUrl.map(image => {
        var imageObject = {
          src: image,
          thumbnail: image,
          thumbnailWidth: 320,
          thumbnailHeight: 212
        };
        thumbnailImages.push(imageObject);
        console.log("thumbnail is", thumbnailImages);
      });
      return (
        <div className="images">
          <h4>Images</h4>
          <Gallery images={thumbnailImages} />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="gallery">
        <div className="images">{this.renderImage(this.props.imageUrls)}</div>
      </div>
    );
  }
}

class search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      final: "",
      table: ""
    };
  }

  handleSignIn(e) {
    e.preventDefault();
    let term = this.refs.username.value;
    this.onChangeInput(term);
  }
  onChangeInput(term) {
    this.props.history.push("/search");
    const component = this;
    console.log("username", term);
    var data = {
      username: term,
      password: "456"
    };
    fetch("http://localhost:3003/images", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(function(response) {
      return response.json().then(function(body) {
        if (body == "") {
          console.log("No results found!!!");
        } else {
          console.log("Goteddddd values!!!");
        }
        component.setState({
          final: body
        });
      });
    });
  }

  signOut() {
    this.props.history.push("/");
    localStorage.clear();
  }

  gonext() {
    const component = this; 
    var data = {
      username: "venkatesh",
      password: "456"
    };
    fetch("http://localhost:3004/table", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(function(response) {
      return response.json().then(function(body) {
        if (body == "") {
          console.log("No results found in table!!!");
        } else {
          console.log("Goteddddd values in table!!!");
          console.log("bodey is",body);
        }
        component.setState({
          table: body
        });
      });
    });

this.props.history.push({
            pathname: "/add-imagess/imgs/1",
            table: this.state.table
          })

  }

  render() {
    var example = [];
    var val = this.props.location.fifa
      ? this.props.location.fifa
      : this.state.final;
    for (var i = 0; i < val.length; i++) {
      example[i] = val[i].location;
    }
    console.log("example is", example);

    return (
      <div className="finalone">
        <div className="fifa">
          <Welcome onSignOut={this.signOut.bind(this)} />
          <button onClick={this.gonext.bind(this)} className="buttable">Table</button>
          <form onSubmit={this.handleSignIn.bind(this)}>
            <center>
              <input
                type="text"
                id="txtboxes"
                ref="username"
                placeholder="Image"
              />
            </center>
            <center>
              <button class="button">Search</button>
            </center>
          </form>
          
          <div className="searching">
            <Gallery1 imageUrls={example} />
          </div>
        </div>
      </div>
    );
  }
}

export default search;
