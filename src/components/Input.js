import React, { Component } from "react";
import * as IMAGES from "../images/icons.js";
export default class Input extends Component {
 render() {
  return (
   <div className="row-container">
    <div className="icon-container">
     <img src={IMAGES[[this.props.id]]} width="40px" />
    </div>
    <input
     type="text"
     id={this.props.id}
     onChange={this.props.handlechange}
     placeholder={this.props.id}
     value={this.props.value}
    />
   </div>
  );
 }
}
