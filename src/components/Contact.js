import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput,  MDBAnimation  } from 'mdbreact';

const Contact = () => {
  return (
    <MDBContainer>
       <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contact
      </h2>
      <MDBRow>
        <MDBCol md="11" className="md-0 mb-5">
          <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
          <h3 className="text-center w-responsive mx-auto pb-5">
        Have a question or want to work together?
      </h3>
            <div className="grey-text">
              <MDBInput
                label="Your name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                name="name" 
              />
              <MDBInput
                label="Your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                name="email"
              />
              <MDBInput
                label="Subject"
                icon="tag"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                name="subject"
              />
              <MDBInput
                type="textarea"
                rows="2"
                label="Your message"
                icon="pencil-alt"
                name="message"
              />
            </div>
            <div className="text-center">
              <MDBBtn outline color="secondary" type="submit">
                Send <MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
      <MDBAnimation reveal type="fadeInLeft" >
      <a href="/"><MDBIcon icon="arrow-alt-circle-up" className="cyan-text  pr-3" size="4x"  /></a>
      </MDBAnimation>
    </MDBContainer>
  );
};

export default Contact;