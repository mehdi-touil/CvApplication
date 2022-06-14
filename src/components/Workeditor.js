import React, { Component } from "react";
import uniqid from "uniqid";
export default class Workeditor extends Component {
 constructor(props) {
  super(props);

  this.state = {
   pos: { content: "", autofocus: false, name: "pos" },
   company: { content: "", autofocus: false, name: "company" },
   adr: { content: "", autofocus: false, name: "adr" },
   from: { content: "", autofocus: false, name: "from" },
   to: { content: "", autofocus: false, name: "to" },
   description: { content: "", autofocus: false, name: "description" },
  };
 }
 updatechanges = (event) => {
  this.props.unset();
  const id = event.target.id;
  this.setState({
   [id]: { content: event.target.value, autofocus: false, name: id },
  });
 };
 addaction = () => {
  this.props.add({ content: this.state, id: uniqid() });
 };
 deleteaction = (event) => {
  this.props.del(event.target.id);
 };
 makechanges = (event) => {
  this.props.edit(event.target.id, event.target.value, event.target.className);
 };
 render() {
  return (
   <div className="workcontainer">
    <div className="worktitle">WorkExperience</div>
    <div className="addworkbox">
     <label htmlFor="pos">Job Position</label>
     <input type="text" id="pos" onChange={this.updatechanges} />
     <label htmlFor="company">Company</label>
     <input type="text" id="company" onChange={this.updatechanges} />
     <label htmlFor="adr">Adress</label>
     <input type="text" id="adr" onChange={this.updatechanges} />
     <label htmlFor="from">From</label>
     <input type="text" id="from" onChange={this.updatechanges} />
     <label htmlFor="to">To</label>
     <input type="text" id="to" onChange={this.updatechanges} />
     <label htmlFor="description">Description</label>
     <input type="text" id="description" onChange={this.updatechanges} />
     <button onClick={this.addaction}>add</button>
    </div>
    {this.props.workexperience.map((x) => {
     return (
      <div className="workitem" key={uniqid()}>
       <label htmlFor="pos">Job Position</label>
       <input
        id={x.id}
        type="text"
        value={x.content.pos.content}
        autoFocus={x.content.pos.autofocus}
        onChange={this.makechanges}
        className="pos"
       />
       <label htmlFor="company">Company</label>

       <input
        id={x.id}
        type="text"
        value={x.content.company.content}
        autoFocus={x.content.company.autofocus}
        onChange={this.makechanges}
        className="company"
       />
       <label htmlFor="adr">Adress</label>

       <input
        id={x.id}
        type="text"
        value={x.content.adr.content}
        autoFocus={x.content.adr.autofocus}
        onChange={this.makechanges}
        className="adr"
       />
       <label htmlFor="from">From</label>

       <input
        id={x.id}
        type="text"
        value={x.content.to.content}
        autoFocus={x.content.to.autofocus}
        onChange={this.makechanges}
        className="to"
       />
       <label htmlFor="to">To</label>

       <input
        id={x.id}
        type="text"
        value={x.content.from.content}
        autoFocus={x.content.from.autofocus}
        onChange={this.makechanges}
        className="from"
       />
       <label htmlFor="description">Description</label>
       <input
        id={x.id}
        type="text"
        value={x.content.description.content}
        autoFocus={x.content.description.autofocus}
        onChange={this.makechanges}
        className="description"
       />
       <button id={x.id} onClick={this.deleteaction}>
        Delete
       </button>
      </div>
     );
    })}
   </div>
  );
 }
}
