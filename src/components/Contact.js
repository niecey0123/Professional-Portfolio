import React from "react";
import {  MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput, MDBAnimation } from "mdbreact";

const ContactPage = () => {
  return (
    
    <MDBContainer>
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contact
      </h2>
      <h3 className="text-center w-responsive mx-auto pb-5">
        Have a question or want to work together?
      </h3>
      <MDBRow>
        <MDBCol md="9" className="md-0 mb-5">
          <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
            <MDBRow>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-name" label="Your name" name="name" />
                </div>
              </MDBCol>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput
                    type="text"
                    id="contact-email"
                    label="Your email"
                    name="email"
                  />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-subject" name="subject" label="Subject" />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput
                    type="textarea"
                    id="contact-message"
                    label="Your message"
                    name="message"
                  />
                </div>
              </MDBCol>
            </MDBRow>
          </form>
          <div className="text-center text-md-left">
            <MDBBtn gradient="purple" size="md" type="submit">
              Send
            </MDBBtn>
          </div>
        </MDBCol>
        <MDBCol md="3" className="text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <MDBIcon icon="map-marker-alt" size="2x" className="cyan-text" />
              <p>Brooklyn, NY ,11213 USA</p>
            </li>
            <li>
              <MDBIcon icon="phone" size="2x" className="cyan-text mt-4" />
              <p>+ 917 409 4835</p>
            </li>
            <li>
              <MDBIcon icon="envelope" size="2x" className="cyan-text mt-4" />
              <p>s.crumpler@gmail.com</p>
            </li>
          </ul>
        </MDBCol>
      </MDBRow>
      <MDBAnimation reveal type="fadeInLeft" >
      <a href="#"><MDBIcon icon="arrow-alt-circle-up" className="cyan-text  pr-3" size="4x"  /></a>
      </MDBAnimation>
    </MDBContainer>
  );
}

export default ContactPage;


