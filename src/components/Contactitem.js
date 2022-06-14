import React, { Component } from "react";

export default class Contactitem extends Component {
 render() {
  return (
   <div className="contactsitem">
    <div className="icon">
     <img src={this.props.image} alt="Logo" width="30px" />
    </div>
    <div className="info">{this.props.infos}</div>
   </div>
  );
 }
}
