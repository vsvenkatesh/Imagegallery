import React, { Component } from "react";
import "./App.css";
import ReactDOM from "react-dom";
import {render} from "react-dom";
import icon1 from './icon1.png';
import trash from './trash.png';
import save from './save.png';
import add from './add.png';
import trash2 from './trash2.png';
import saveicon from './saveicon.svg';
import editicon from './editicon.svg';
import deleteicon from './deleteicon.svg';
import axios from "axios";
import cancel from './cancelsign.svg';




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



class Popup extends React.Component {

  constructor() {
    super();
    this.state = {
      obj: "",
      clkimg:""
    };
  }

  handleSignIn(e) {
    const component = this;
    e.preventDefault();
    let term = this.refs.username.value;
axios.get("https://api.flickr.com/services/rest/?api_key=a1c4d1ff7f95e63effb5754ac37d9226&method=flickr.photos.search&text="+term+"&format=json&nojsoncallback=1") 
  .then((response) => {
    var objval=response.data.photos.photo;
    console.log("the flicker is",objval);
    component.setState({
          obj: objval
        });
  })
  .catch((err) => {
  console.log(err)
  })
  this.props.Onterm(term)

  }


  imagepop(imageUrl) {

console.log("image cliclk is works for eggiht",imageUrl.id);

  this.oneid=imageUrl.id;
  this.props.Onreceiveimg(imageUrl)
 

  }

  idclick() {

    console.log("click is working");
  }


  renderImage(imageUrl) {
    console.log(imageUrl);
    var url="https://farm"+imageUrl.farm+".staticflickr.com/"+imageUrl.server+"/"+imageUrl.id+"_"+imageUrl.secret+".jpg";
    return (

    
<div> 
<div className="img_pop"> 

  
  <img className="pop_imagesid" src={url} onClick={()=>{this.imagepop(imageUrl),this.props.closePopup}} height="100" width="120" />

     </div>
     </div>
    );
  }

  render() {
    console.log("the state value is",this.state.obj)

    return (
      <div className='popups2'>
      <div className='popup_inner2'>
      <img src={cancel} onClick={this.props.closePopup} className="cancelpop" alt="logo" />
      
       <form onSubmit={this.handleSignIn.bind(this)}>
            <center>
              <input
                type="text"
                id="box"
                ref="username"
                placeholder="Image"
              />
            </center>
            <center>
              <button class="button">Search</button>
            </center>

            </form>
       
        {this.state.obj ?
          this.state.obj.map(imageUrl => this.renderImage(imageUrl))
          :null
        }
    
          <form>     
          <button className="table_butts" onClick={this.props.closePopup}>close me</button>
            </form>

       
        </div>
      </div>
    );
  }
}




class Popups extends React.Component {


  constructor() {
    super();
    this.state = {
      showPopup: false,
      imageUrls:"",
      flkrUrl:"",
      terms:""
    };
  }

  term(term) {

    console.log("search values in input",term);
    this.setState({
      terms: term,
    });

  }

  receiveimg(imageUrl) {
this.togglePopup();
    console.log("imageUrl is working in receiveimg",imageUrl);

this.setState({
      imageUrls: imageUrl,
      flkrUrl:"https://farm"+imageUrl.farm+".staticflickr.com/"+imageUrl.server+"/"+imageUrl.id+"_"+imageUrl.secret+".jpg"
    });

  }

handle(number) { 
    const component = this; 
    console.log(number); 
    
    let tags = this.refs.tags.value
    let category=this.refs.category.value
    let images=this.refs.images.value
    console.log("tags",tags);

    var img = {
      tags: tags,
      category: category,
      images: images
    };
    fetch("http://localhost:3008/Insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(img)
    }).then(function(response) {      
    });
   
   window.location.reload();

  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
         <button className="table_but" onClick={this.togglePopup.bind(this)}>Google search</button>
         <input type="text" ref="tags" placeholder="tags" id="popup_class" name="name" value={this.state.imageUrls ? this.state.imageUrls.title  :null} />
        <input type="text" ref="category" placeholder="category" id="popup_class" name="name" value={this.state.imageUrls ? this.state.terms  :null} />
        <input type="text" ref="images" placeholder="image" id="popup_class" name="name" value={this.state.imageUrls ? this.state.flkrUrl  :null} />
         <button id="popup_bt1" onClick={this.handle.bind(this)}>Insert</button>
        <button id="popup_bt2" onClick={this.props.closePopup}>close</button>
        {this.state.showPopup ? 
          <Popup Onreceiveimg={this.receiveimg.bind(this)}
          Onterm={this.term.bind(this)}
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
        </div>
      </div>
    );
  }
}







export default class table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      final: "",
      count:"",
      showPopup: false
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
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
 

 changeid(number) {

console.log("now the id is",number);


this.props.history.push({
            pathname: "/add-imagese/imgs/"+number,
            table: this.state.table
          })


 }
 

  render() {
     var val = this.props.location.table
      ? this.props.location.table
      : this.state.term;
      var total = this.props.location.table
      ? this.props.location.table
      : this.state.count;
    console.log("the big count is ",total);
    var test=total[0];
    if(test){
          console.log("test is ",test.count);
          var pageno=( test.count/ val.length);
console.log("pageno is",Math.ceil(pageno));
var pageNumbers=[]
console.log("length is",val.length);

for (let i = 1; i <= Math.ceil(test.count/ 10); i++) {
          pageNumbers.push(i);
        } 

        console.log("i is",pageNumbers);
 } 

var renderPageNumbers
    pageNumbers ? 

        renderPageNumbers = pageNumbers.map(number => {
          return (
            <li
              key={number}
              id={number}
               onClick={()=>{this.changeid(number)}}
            >
              {number}
            </li>
          );
            })
            : null


   

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
          <center><button className="table_butt" onClick={this.togglePopup.bind(this)}>Insert</button></center>
          <Table data={exam} />
        </div>
        <div className="center">
        <ul class="pagination">
              {renderPageNumbers}
            </ul>
           
      {this.state.showPopup ? 
          <Popups
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
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
    <td><input type="text" ref="tags" className="edit_txt" defaultValue={data.tags}/></td>
    <td><input type="text" ref="category" className="edit_txt" defaultValue={data.type} /></td>
    <td><input type="text" ref="images" className="edit_txt" defaultValue={data.location} /></td>  
    <td> 
       <img src={saveicon} onClick={()=>{this.handleSignIn(data)}} className="App-logo" alt="logo" />
      </td>
    </tr>
:
   <tr>        
      <td>{data.id}</td>
     <td><img src={data.location} width="100" height="50" /></td>
      <td>{data.tags}</td>
      <td>{data.type}</td>
       <td>{data.location}</td>
      <td><img src={deleteicon} onClick={()=>{this.delete(data)}} className="App-logo" alt="logo" />
      <img src={editicon} onClick={()=>{this.Edit(data)}} className="App-logo" alt="logo" />
      </td>
    </tr>

    );
    return row;
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
      <div className="scroll">
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











