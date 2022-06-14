import React, { Component } from "react";
import uniqid from "uniqid";

export default class Skills extends Component {
 render() {
  return (
   <div className="skillscontainer">
    <div className="skillstitle">skills</div>
    <ul className="skillslist">
     {this.props.infos.skills.map((x) => {
      return <li key={uniqid()}>{x.content}</li>;
     })}
    </ul>
   </div>
  );
 }
}
