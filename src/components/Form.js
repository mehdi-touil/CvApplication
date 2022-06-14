import React, { Component } from "react";
import Cv from "./Cv";
import uniqid from "uniqid";
import * as IMAGES from "../images/icons.js";
import Input from "./Input";
import Skillseditor from "./Skillseditor";
import Workeditor from "./Workeditor";
import Educationeditor from "./Educationeditor";

export default class Form extends Component {
 constructor(props) {
  super(props);
  this.state = {
   name: "name",
   job: "job",
   image: IMAGES.image,
   aboutme:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quibusdamatque expedita a nisi qui rem quod, eos corrupti modi error necessitatibusrerum? Inventore eaque eum officiis hic porro ex.",
   phone: "65656565",
   email: "email",
   adr: "adr",
   github: "github",
   linkedin: "linkedin",
   skills: [],
   workexperience: [],
   education: [],
  };
 }
 handleimage = (event) => {
  if (event.target.files && event.target.files[0]) {
   let img = event.target.files[0];
   this.setState({
    image: URL.createObjectURL(img),
   });
  }
 };
 handlechange = (event) => {
  const id = event.target.id;
  this.setState({
   [id]: event.target.value,
  });
 };
 skillchange = (newskill) => {
  this.setState({
   skills: [...this.state.skills, newskill],
  });
 };
 workadd = (newwork) => {
  this.setState({
   workexperience: this.state.workexperience.concat(newwork),
  });
 };
 educationadd = (newedu) => {
  this.setState({
   education: newedu,
  });
 };
 workdelete = (id) => {
  this.setState({
   workexperience: this.state.workexperience.filter((x) => x.id !== id),
  });
 };
 educationdelete = (id) => {
  this.setState({
   education: this.state.education.filter((x) => x.id !== id),
  });
 };
 workedit = (id, value, name) => {
  this.setState({
   workexperience: this.state.workexperience.map((x) => {
    var newx = x;
    if (newx.id != id) {
     for (let el in newx.content) {
      newx.content[el].autofocus = false;
     }
    } else {
     for (let el in newx.content) {
      if (newx.content[el].name != name) newx.content[el].autofocus = false;
      else {
       newx.content[el].autofocus = true;
       newx.content[el].content = value;
      }
     }
    }
    return newx;
   }),
  });
 };
 educationedit = (id, value, name) => {
  this.setState({
   education: this.state.education.map((x) => {
    var newx = x;
    if (newx.id != id) {
     for (let el in newx.autofocus) {
      newx.autofocus[el] = false;
     }
    } else {
     for (let el in newx.autofocus) {
      if (el != name) newx.autofocus[el] = false;
      else {
       newx.autofocus[el] = true;
       newx.content[el] = value;
      }
     }
    }
    return newx;
   }),
  });
 };
 skilldelete = (id) => {
  this.setState({
   skills: this.state.skills.filter((x) => x.id !== id),
  });
 };
 skilledit = (id, value, autofocus) => {
  this.setState({
   skills: this.state.skills.map((x) =>
    x.id != id
     ? { id: x.id, content: x.content, autofocus: false }
     : { id: id, content: value, autofocus: autofocus }
   ),
  });
 };
 unsetautofocus_skills = () => {
  var skills_copy = this.state.skills;
  for (let e in skills_copy) {
   skills_copy[e].autofocus = false;
  }
  this.setState({
   skills: skills_copy,
  });
 };
 unsetautofocus_work = () => {
  var work_copy = this.state.workexperience;
  for (let e1 in work_copy) {
   for (let e2 in work_copy[e1].content) {
    work_copy[e1].content[e2].autofocus = false;
   }
  }
  this.setState({
   workexperience: work_copy,
  });
 };
 unsetautofocus_education = () => {
  this.setState({
   education: this.state.education.map((x) => {
    for (let e in x.autofocus) {
     x.autofocus[e] = false;
    }
    return x;
   }),
  });
 };
 loadexample = () => {
  this.setState({
   name: "Annie A. Desantis",
   job: "Aws engineer",
   image: IMAGES.image,
   aboutme:
    "Highly-skilled and driven AWS engineer with 3 years of experience.Increased new business by 8% by identifying and implementing automation opportunities. Seeking to effectively design and support Azure / AWS environments at Frontend Arts.",
   phone: "305-954-8247",
   email: "annieadesantis2@dotspot.com",
   adr: "Bluebird, Orlando, FL",
   github: "github.com/desantisannie",
   linkedin: "linkedin.com/in/desantisannie",
   skills: [
    { content: "Microsoft Azure SQL Admin", id: "l4e1qgl5", autofocus: false },
    { content: "Exadata DB Administration", id: "l4e1qgl5", autofocus: false },
    { content: "Sybase DB Administration", id: "l4e1qgl5", autofocus: false },
    {
     content: "SQL Server DB Administration",
     id: "l4e1qgl5",
     autofocus: false,
    },
    {
     content: "Oracle Database Administration",
     id: "l4e1qgl5",
     autofocus: false,
    },
    { content: "Energy Supply & Trading", id: "l4e1qgl5", autofocus: false },
    { content: "Project Invoicing", id: "l4e1qgl5", autofocus: false },
    { content: "Project Finance", id: "l4e1qgl5", autofocus: false },
    { content: "MySQL DB Administration", id: "l4e1qgl5", autofocus: false },
   ],

   workexperience: [
    {
     id: uniqid(),
     content: {
      pos: { content: "AWS Engineer", autofocus: false, name: "pos" },
      company: { content: "Bluebird", autofocus: false, name: "company" },
      adr: { content: "Orlando, FL", autofocus: false, name: "adr" },
      from: { content: "2025", autofocus: false, name: "from" },
      to: { content: "2030", autofocus: false, name: "to" },
      description: {
       content:
        "Enhanced presentation and communication methods used for presenting projects’ capabilities to prospective clients.",
       autofocus: false,
       name: "description",
      },
     },
    },
   ],
   education: [
    {
     id: uniqid(),
     content: {
      degree: "Bachelor of Science",
      university: "Florida State University",
      city: "Tallahassee, FL",
      from: "2021",
      to: "2025",
     },
     autofocus: {
      degree: false,
      university: false,
      city: false,
      from: false,
      to: false,
     },
    },
   ],
  });
 };
 resetexample = () => {
  this.setState({
   name: "",
   job: "",
   image: IMAGES.image,
   aboutme: "",
   phone: "",
   email: "",
   adr: "",
   github: "",
   linkedin: "",
   skills: [],
   workexperience: [],
   education: [],
  });
 };
 render() {
  return (
   <div className="bigcontainer">
    <div
     className="formcontainer"
     style={{ display: this.props.mode == "edit" ? "flex" : "none" }}
    >
     <div className="row-container">
      <div className="icon-container">
       <img src={IMAGES.image} width="40px" />
      </div>
      <label htmlFor="image">Drop Your Image...</label>
      <input type="file" id="image" onChange={this.handleimage} />
     </div>
     <Input
      id="name"
      handlechange={this.handlechange}
      value={this.state.name}
     />
     <Input id="job" handlechange={this.handlechange} value={this.state.job} />
     <div className="row-container">
      <div className="icon-container-aboutme">
       <img src={IMAGES.aboutme} width="40px" />
      </div>
      <div className="textarea-container">
       <textarea
        id="aboutme"
        onChange={this.handlechange}
        value={this.state.aboutme}
        required
       />
       <label htmlFor="aboutme">About Me</label>{" "}
      </div>
     </div>
     <Input
      id="phone"
      handlechange={this.handlechange}
      value={this.state.phone}
     />
     <Input
      id="email"
      handlechange={this.handlechange}
      value={this.state.email}
     />
     <Input id="adr" handlechange={this.handlechange} value={this.state.adr} />
     <Input
      id="linkedin"
      handlechange={this.handlechange}
      value={this.state.linkedin}
     />
     <Input
      id="github"
      handlechange={this.handlechange}
      value={this.state.github}
     />
     <Skillseditor
      add={this.skillchange}
      delete={this.skilldelete}
      edit={this.skilledit}
      skills={this.state.skills}
      unset={this.unsetautofocus_skills}
     />
     <Workeditor
      add={this.workadd}
      workexperience={this.state.workexperience}
      del={this.workdelete}
      edit={this.workedit}
      unset={this.unsetautofocus_work}
     />
     <Educationeditor
      add={this.educationadd}
      education={this.state.education}
      del={this.educationdelete}
      edit={this.educationedit}
      unset={this.unsetautofocus_education}
     />
    </div>

    <Cv
     style={{ display: this.props.mode == "edit" ? "none" : "" }}
     infos={this.state}
     children1={<button onClick={this.loadexample}>Load Example</button>}
     children2={<button onClick={this.resetexample}>Reset Example</button>}
    />
    
   </div>
  );
 }
}
