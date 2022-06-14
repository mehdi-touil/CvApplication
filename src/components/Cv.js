import React, { Component } from "react";
import Aboutme from "./Aboutme";
import Contacts from "./Contacts";
import Education from "./Education";
import Header from "./Header";
import Skills from "./Skills";
import Workexperience from "./Workexperience";
export default class Cv extends Component {
 render() {
  return (
   <div className="cvcontainer" style={this.props.style}>
    <div className="loadexample">
     {this.props.children1}
     {this.props.children2}
    </div>
    <Header infos={this.props.infos} />
    <Aboutme infos={this.props.infos} />
    <div className="cvmaincontent">
     <div className="skills_contacts_section">
      <Contacts infos={this.props.infos} />
      <Skills infos={this.props.infos} />
     </div>
     <div className="workex_education_section">
      <Workexperience infos={this.props.infos} />
      <Education infos={this.props.infos} />
     </div>
    </div>
   </div>
  );
 }
}
