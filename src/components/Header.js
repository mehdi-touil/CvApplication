import React, { Component } from "react";
export default class Header extends Component {
 render() {
  return (
   <div className="cvHeader">
    <div className="imagecontainer">
     <img
      src={this.props.infos.image}
      alt="Logo"
      width="150px"
      height="150px"
     />
    </div>
    <div className="Headertext">
     <div className="name">{this.props.infos.name}</div>
     <div className="job">{this.props.infos.job}</div>
    </div>
   </div>
  );
 }
}
