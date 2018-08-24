import React, { Component } from "react";
import "./App.css";
import ReactDOM from "react-dom";
import {render} from "react-dom";
import icon1 from './icon1.png';
import trash from './trash.png';
import save from './save.png';
import add from './add.png';
import trash2 from './trash2.png';




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




export default class table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      final: "",
      count:""
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

componentDidMount() {

  const component = this; 
    var val="some"
      var data = {
      username: "venkatesh",
      password: val
    };
    fetch("http://localhost:3006/total", {
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
          count: body
        });
      });
    });

}
   

  signOut() {
    this.props.history.push("/");
    localStorage.clear();
  }

  goback() {
this.props.history.push({
            pathname: "/add-imagess/iamg/80",
            table: this.state.table
          })

  }


  gonext() {
this.props.history.push({
            pathname: "/add-imagess/img/60",
            table: this.state.table
          })

  }

  goback2() {
this.props.history.push({
            pathname: "/add-images/img/50",
            table: this.state.table
          })

  }
  goback3() {
this.props.history.push({
            pathname: "/add-imagess/40",
            table: this.state.table
          })

  }
  goback4() {
this.props.history.push({
            pathname: "/add-images/30",
            table: this.state.table
          })

  }
  goback5() {
this.props.history.push({
            pathname: "/add-image/20",
            table: this.state.table
          })

  }
  goback6() {
this.props.history.push({
            pathname: "/category/10",
            table: this.state.table
          })

  }
  goback7() {
this.props.history.push({
            pathname: "/table/0",
            table: this.state.table
          })

  }
  goback8() {
this.props.history.push({
            pathname: "/add-imagess/imgs/70",
            table: this.state.table
          })

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
        <div className="center">
        <button className="newbutt"onClick={this.goback7.bind(this)}>1</button>
        <button className="newbutt"onClick={this.goback6.bind(this)}>2</button>
        <button className="newbutt"onClick={this.goback5.bind(this)}>3</button>
        <button className="newbutt"onClick={this.goback4.bind(this)}>4</button>
        <button className="newbutt"onClick={this.goback3.bind(this)}>5</button>
        <button className="newbutt"onClick={this.goback2.bind(this)}>6</button>
        <button className="newbutt"onClick={this.gonext.bind(this)}>7</button>
        <button className="newbutt"onClick={this.goback8.bind(this)}>8</button>     
        <button className="newbutt"onClick={this.goback.bind(this)}>9</button>
      </div>
      </div>
    );
  }
}




class TableRow extends React.Component {
  
constructor(props) {
    super(props);
    this.state = {
      disable: true
    };
  }
   

  



delete(data) {

const component = this; 
    console.log(data);     
     var data = {
      id: data.id
    };
    fetch("http://localhost:3008/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(function(response) {      
    });
    window.location.reload();

}
  

  Edit(data) {
    console.log("edit value",data.id);

this.setState({
disable: false
});
this.id=data
  }

  handleSignIn(data) { 
    const component = this; 
    console.log(data);   
    let tags = this.refs.tags.value
    let category=this.refs.category.value
    let images=this.refs.images.value
    console.log("tags",tags);

    var img = {
      tags: tags,
      category: category,
      images: images,
      id:data.id
    };
    fetch("http://localhost:3008/Save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(img)
    }).then(function(response) {      
    });
   
   window.location.reload();

  }

  

  render() {
   
    
    const {
      data
    } = this.props;
    console.log("val value is this",this.id);
console.log("val disable ",this.state.disable);
    const row = data.map((data) =>  
     
      data == this.id ?
     <tr> 
     <td>{data.id}</td>
     <td><img src={data.location} width="100" height="50" /></td>
    <td><input type="text" ref="tags" defaultValue={data.tags}/></td>
    <td><input type="text" ref="category" defaultValue={data.type} /></td>
    <td><input type="text" ref="images" defaultValue={data.location} /></td>  
    <td> 
       <img src={save} onClick={()=>{this.handleSignIn(data)}} className="App-logo" alt="logo" />
      </td>
    </tr>
:
   <tr>        
      <td>{data.id}</td>
     <td><img src={data.location} width="100" height="50" /></td>
      <td>{data.tags}</td>
      <td>{data.type}</td>
       <td>{data.location}</td>
      <td><img src={trash2} onClick={()=>{this.delete(data)}} className="App-logo" alt="logo" />
      <img src={icon1} onClick={()=>{this.Edit(data)}} className="App-logo" alt="logo" />
      </td>
    </tr>

    );
    return row;
    }
  }








class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
        <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}


class Table extends React.Component {
 
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  
  render() {
    return (
      <div>
      <table id="customers">
      <thead>
            <tr>
            <th>Id</th>
            <th>picture</th>
              <th>tags</th>
              <th>category</th>
              <th>Images</th>
              <th>Actions</th>
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











