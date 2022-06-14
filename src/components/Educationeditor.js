import React, { Component } from "react";
import uniqid from "uniqid";
export default class Educationeditor extends Component {
 constructor(props) {
  super(props);
  this.state = {
   degree: "",
   university: "",
   city: "",
   from: "",
   to: "",
  };
 }
 updatechanges = (event) => {
  this.props.unset();
  const id = event.target.id;
  this.setState({
   [id]: event.target.value,
  });
 };
 addaction = () => {
  this.props.add([
   ...this.props.education,
   {
    content: this.state,
    id: uniqid(),
    autofocus: {
     degree: false,
     university: false,
     city: false,
     from: false,
     to: false,
    },
   },
  ]);
 };
 deleteaction = (event) => {
  this.props.del(event.target.id);
 };
 makechanges = (event) => {
  this.props.edit(event.target.id, event.target.value, event.target.className);
 };
 render() {
  return (
   <div className="educontainer">
    <div className="edutitle">Education Cursus</div>
    <div className="addedubox">
     <label htmlFor="degree">Degree</label>
     <input type="text" id="degree" onChange={this.updatechanges} />
     <label htmlFor="university">University</label>
     <input type="text" id="university" onChange={this.updatechanges} />
     <label htmlFor="city">City</label>
     <input type="text" id="city" onChange={this.updatechanges} />
     <label htmlFor="from">From</label>
     <input type="text" id="from" onChange={this.updatechanges} />
     <label htmlFor="to">To</label>
     <input type="text" id="to" onChange={this.updatechanges} />
     <button onClick={this.addaction}>add</button>
    </div>
    {this.props.education.map((x) => {
     return (
      <div className="eduitem" key={uniqid()}>
       <label htmlFor="degree">Degree</label>
       <input
        id={x.id}
        type="text"
        value={x.content.degree}
        autoFocus={x.autofocus.degree}
        onChange={this.makechanges}
        className="degree"
       />
       <label htmlFor="university">university</label>
       <input
        id={x.id}
        type="text"
        value={x.content.university}
        autoFocus={x.autofocus.university}
        onChange={this.makechanges}
        className="university"
       />
       <label htmlFor="city">city</label>
       <input
        id={x.id}
        type="text"
        value={x.content.city}
        autoFocus={x.autofocus.city}
        onChange={this.makechanges}
        className="city"
       />
       <label htmlFor="from">From</label>
       <input
        id={x.id}
        type="text"
        value={x.content.from}
        autoFocus={x.autofocus.from}
        onChange={this.makechanges}
        className="from"
       />
       <label htmlFor="to">To</label>
       <input
        id={x.id}
        type="text"
        value={x.content.to}
        autoFocus={x.autofocus.to}
        onChange={this.makechanges}
        className="to"
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
