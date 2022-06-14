import React, { Component } from "react";
import Form from "./Form";
import Pageheader from "./Pageheader";
export default class App extends Component {
 constructor(props) {
  super(props);
  this.state = {
   mode: "edit",
  };
 }
 handlemodechange = (event) => {
  this.setState({ mode: event.target.checked ? "preview" : "edit" });
 };
 render() {
  return (
   <div id="maincontainer">
    <Pageheader checkboxchange={this.handlemodechange} mode={this.state.mode} />
    <Form mode={this.state.mode} />
    <footer>
     Created by{" "}
     <a href="https://www.github.com/mehdi-touil/" rel="#">
      Mehdi Touil
     </a>{" "}
     for The odin Project || copyright © 2022 all rights reserved{" "}
    </footer>
   </div>
  );
 }
}
