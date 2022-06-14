import React, { Component } from "react";

export default class Aboutme extends Component {
 render() {
  return (
   <div className="aboutmecontainer">
    <div>About Me</div>
    <div>{this.props.infos.aboutme}</div>
   </div>
  );
 }
}
