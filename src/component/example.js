import React, { Component } from "react";
import "./App.css";
import Gallery from "react-grid-gallery";
import ReactDOM from "react-dom";

export default class ComponentA extends React.Component {
   render(){
      return(
      	<div>
      	<ComponentB />
      	<Componentc />
      	<Componentx />
      	</div>
      	);
   }
}

class ComponentB extends React.Component {
    render() {
      return (<h1>Hello world! This is Component B</h1>)
    }
}
    class Componentx extends React.Component {
    render() {
      return (<h1>Hello world! This is Component x</h1>)
    }
}
class Componentc extends React.Component {
    render() {
      return (<h1>Hello world! This is Component c</h1>)
    }
}