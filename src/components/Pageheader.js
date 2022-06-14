import React, { Component } from "react";
import imageview from "../images/eye.png"; // relative path to image
import imageedit from "../images/editing.png"; // relative path to image

export default class Pageheader extends Component {
 render() {
  return (
   <div className="Pageheader">
    <p>Create Your Cv</p>
    <div className="mode">
     <span>{this.props.mode}</span>
     <img
      src={this.props.mode == "edit" ? imageedit : imageview}
      height="60%"
     />
    </div>
    <div id="modechange">
     <input
      type="checkbox"
      id="modechangecheckbox"
      onClick={this.props.checkboxchange}
     />
     <label htmlFor="modechangecheckbox"></label>
    </div>
   </div>
  );
 }
}
