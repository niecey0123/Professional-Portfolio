import React from "react";
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";

const About = () => {
  return (
      <main>
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">
          About me
        </h2>
        <p className="lead grey-text w-responsive mx-auto mb-5">
        Solution-driven Front End Developer excelling in highly collaborative work environments, 
        finding solutions to challenges and focused on customer satisfaction. Proven experience 
        developing consumer-focused web sites using HTML, CSS, JQuery,React and JavaScript. Responding 
        to challenges by designing and developing solutions and building web applications aligned to 
        customer's services.
        </p>
        <MDBRow>
          <MDBCol md="4">
            <MDBIcon icon="male" size="3x" className="red-text" />
            <h5 className="font-weight-bold my-4">User Experience</h5>
            <p className="grey-text mb-md-0 mb-5">
             Conceptualizing original ideas that bring simplicity and user friendliness to complex design roadblocks
            </p>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon icon="code" size="3x" className="cyan-text" />
            <h5 className="font-weight-bold my-4">Development</h5>
            <p className="grey-text mb-md-0 mb-5">
              Passion for developing,releasing, and maintaining large-scale web applications.
            </p>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon far icon="comments" size="3x" className="orange-text" />
            <h5 className="font-weight-bold my-4">Collaborative</h5>
            <p className="grey-text mb-md-0 mb-5">
              Proactive team player with strong understanding of system preferences, efficiency and building 
              responsive front ends.
            </p>
          </MDBCol>
        </MDBRow>
      </section>
      </main>
  );
}

export default About;