import React, { Component } from "react";
import uniqid from "uniqid";
import * as IMAGES from "../images/icons.js";
export default class Skillseditor extends Component {
 constructor(props) {
  super(props);
  this.state = { newskill: "" };
 }
 getnewskill = (event) => {
  this.setState({ newskill: event.target.value });
  this.props.unset();
 };

 addskill = (event) => {
  this.props.add({
   content: this.state.newskill,
   id: uniqid(),
   autofocus: false,
  });
 };
 deleteskill = (event) => {
  this.props.delete(event.target.id);
 };
 getchanges = (event) => {
  this.props.edit(event.target.className, event.target.value, true);
 };
 render() {
  return (
   <div className="skillseditor-container">
    <div className="skillbartitle">Skills</div>
    <div className="addskillbar">
     <input
      type="text"
      onChange={this.getnewskill}
      placeholder="Add New Skill"
     />
     <img id="addbtn" src={IMAGES.plus} onClick={this.addskill} />
    </div>
    <div className="skilllist">
     {this.props.skills.map((x) => {
      return (
       <div className="skillrow" key={uniqid()}>
        <input
         type="text"
         className={x.id}
         value={x.content}
         onChange={this.getchanges}
         autoFocus={x.autofocus}
        />
        <img
         src={IMAGES.del}
         id={x.id}
         className="delicon"
         onClick={this.deleteskill}
         width="7%"
        />
       </div>
      );
     })}
    </div>
   </div>
  );
 }
}
