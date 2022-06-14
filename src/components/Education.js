import React, { Component } from "react";
import uniqid from "uniqid";

export default class Education extends Component {
 render() {
  return (
   <div className="workexcontainer">
    <div className="workextitle">Education</div>
    {this.props.infos.education.map((x) => {
     return (
      <div key={uniqid()} className="workexitem">
       <div className="from_to">
        <div className="from">{x.content.from}</div>
        <div className="to">{x.content.to}</div>
       </div>
       <div className="sepbar">
        <div className="circle"></div>
        <div className="line"></div>
       </div>
       <div className="extext">
        <div className="exjob">{x.content.degree}</div>
        <div className="excompany">{x.content.university}</div>
        <div className="exadr">{x.content.city}</div>
       </div>
      </div>
     );
    })}
   </div>
  );
 }
}
