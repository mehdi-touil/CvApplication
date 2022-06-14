import React, { Component } from "react";
import * as IMAGES from "../images/icons.js";
import Contactitem from "./Contactitem";
export default class Contacts extends Component {
 render() {
  return (
   <div className="contactscontainer">
    <div className="contactstitle">Contacts</div>
    <Contactitem image={IMAGES.phone} infos={this.props.infos.phone} />
    <Contactitem image={IMAGES.email} infos={this.props.infos.email} />
    <Contactitem image={IMAGES.adr} infos={this.props.infos.adr} />
    <Contactitem image={IMAGES.linkedin} infos={this.props.infos.linkedin} />
    <Contactitem image={IMAGES.github} infos={this.props.infos.github} />
   </div>
  );
 }
}
