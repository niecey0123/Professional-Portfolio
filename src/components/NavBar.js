import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBAnimation,
  MDBMask,
  MDBView,
  MDBCard,
  MDBCardBody,
  MDBSmoothScroll
} from "mdbreact";

import { BrowserRouter as Router } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar color=" rgba-brown-strong" dark expand="md" fixed="top">
              <MDBNavbarBrand href="/">
                SC
              </MDBNavbarBrand>
              {!this.state.isWideEnough && (
                <MDBNavbarToggler onClick={this.onClick} />
              )}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="/">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/about">About</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/skills">Skills</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/projects">Projects</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/contact">Contact</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>

          <MDBView src="http://www.sabusinessindex.co.za/wp-content/uploads/2017/08/Digital-Leadership.jpg">
            <MDBMask
              overlay="black-light"
              className="flex-center flex-column text-white text-center"
            >
              <MDBCard
                color="rgba-brown-light"
                text="white"
                className="text-center"
              >
                <MDBCardBody>
                  <MDBAnimation type="fadeIn" duration="2s">
                    <h1>Shaniece Crumpler</h1>
                  </MDBAnimation>
                  <MDBAnimation type="fadeIn" duration="2s" delay="1.5s">
                    <h5>Front-End Engineer</h5>
                  </MDBAnimation>
                  <MDBAnimation type="fadeIn" duration="2s" delay="3.2s">
                    <p>
                      “ Code is like humor. When you have to explain it, it’s
                      bad.” – Cory House{" "}
                    </p>
                  </MDBAnimation>
                </MDBCardBody>
              </MDBCard>
            </MDBMask>
          </MDBView>
        </header>
      </div>
    );
  }
}

export default Navbar;
