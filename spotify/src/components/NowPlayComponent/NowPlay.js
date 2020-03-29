import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Jumbotron,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  Button,
  DropdownToggle
} from "reactstrap";
import "./PremiumComponent.css";

import { NavLink, Redirect } from "react-router-dom";

class Premium extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      modal: false,
      isModalOpen: false,
      collapsed: true,
      Premium: false,
      tempId: this.props.id.id
    };
    this.state.toggleNav = this.toggleNav.bind(this);
    this.togglemodal = this.togglemodal.bind(this);
    this.handlePremiumT = this.handlePremiumT.bind(this);
    this.handlePremiumF = this.handlePremiumF.bind(this);
  }
  render() {
    return ee;
  }
}

export default Premium;
