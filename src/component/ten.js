import React, { Component } from "react";
import "./App.css";
import ReactDOM from "react-dom";
import {render} from "react-dom";



class Welcome extends React.Component {
    render() {
      var test = localStorage.getItem("test");
      return (<div className="hellosearch">
      Hello <strong>{test}</strong> !!!/<a
        id="hr"
        href="javascript:;"
        onClick={this.props.onSignOut}
      >
        Sign out
      </a>
    </div>)
    }
}




export default class ten extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      final: ""
    };
  }

  componentWillMount() {
    const component = this; 
    var val=this.props.match.params.id
      var data = {
      username: "venkatesh",
      password: val
    };
    fetch("http://localhost:3006/table", {
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
          term: body
        });
      });
    });
   }


  signOut() {
    this.props.history.push("/");
    localStorage.clear();
  }


 

  render() {
     var val = this.props.location.table
      ? this.props.location.table
      : this.state.term;
    console.log("val is ",val);
    var exam=[]
    var len=10;
    for(var i=0;i<val.length;i++)
    {
      exam[i]=val[i];
    }
    console.log("location is",exam);
    var news=[]
    for(var j=0;j<10;j++)
    {
      news[j]=val[j];
    }
        console.log("location is news",news);
        var exams=[]
        for(var i=0;i<news.length;i++)
    {
      exams[i]=news[i];
    }
    console.log("location is exams",exams);

    return (
      <div className="finalone">
        <div className="fifa">
          <Welcome onSignOut={this.signOut.bind(this)} />
          <form>
            <center>
            </center>
            <center>
              <button class="buttable">insert</button>
            </center>
          </form>
          <Table data={exam} />
        </div>
        
      </div>
    );
  }
}




class TableRow extends React.Component {
  

  

  render() {
   
    const {
      data
    } = this.props;
    console.log("map value",data)
    var vals=[]
    for(var i=0;i<10;i++)
    {
    console.log("vals is data",vals);
    const row = data.map((data) =>
    <tr>
      <td>{data.location}</td>
      <td>{data.tags}</td>
      <td>{data.type}</td>
    </tr>
    );
    return row;
    }
  }

}

class Table extends React.Component {
 
  constructor(props) {
    super(props);
   
  }

  
  render() {
    return (
      <div>
      <table>
      <thead>
            <tr>
              <th>location</th>
              <th>tags</th>
              <th>type</th>
            </tr>
          </thead>

          <tbody>
        <TableRow data={this.props.data} />
                  </tbody>

      </table>
      </div>
    );
  }
}











