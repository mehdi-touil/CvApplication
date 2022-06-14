import React, { Component } from "react";
import uniqid from "uniqid";

export default class Workexperience extends Component {
 render() {
  return (
   <div className="workexcontainer">
    <div className="workextitle">Work experience</div>
    {this.props.infos.workexperience.map((x) => {
     return (
      <div key={uniqid()} className="workexitem">
       <div className="from_to">
        <div className="from">{x.content.from.content}</div>
        <div className="to">{x.content.to.content}</div>
       </div>
       <div className="sepbar">
        <div className="circle"></div>
        <div className="line"></div>
       </div>
       <div className="extext">
        <div className="exjob">{x.content.pos.content}</div>
        <div className="excompany">{x.content.company.content}</div>
        <div className="exadr">{x.content.adr.content} </div>
        <div className="exdecription">{x.content.description.content}</div>
       </div>
      </div>
     );
    })}
   </div>
  );
 }
}
