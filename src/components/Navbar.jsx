import React from "react";
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./navbar.css";
import logo from "../Images/logo.png";
export default function navbar(props) {
  return (
    <div>
      <Navbar className="nav">
        {/* <Navbar.Brand href="#home">Blogging </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <span className="text-navbar" href="#home">
              Explore
            </span>
            <span href="#link" className="text-navbar">
              Post
            </span>
          </Nav>
          <span className="address mr-1 ">{props.address}</span>
          <img src={logo} style={{width: "3%",marginRight:"48.5%"}} className="ml-lg-6"/>
          {/* 
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
