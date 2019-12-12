import React from "react";
import {  MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";

const Projects = () => {
  return (
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold my-5">
        Projects
      </h2>
      <MDBRow className="text-center">
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="https://user-images.githubusercontent.com/47402849/65206970-46232480-da5e-11e9-9d00-15f93a5951c1.png"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">The Big O (Obstacle) Dress Up Game</h4>
            <p className="grey-text">
            Children's Cognitive Training App tailored to help children build up 
            muscle memory by following timed instructions while dressing up a character.
            </p>
           <a href="https:/wizardly-hypatia-64b87d.netlify.com"> <MDBBtn gradient="purple" size="sm">
              <MDBIcon far icon="clone" className="left" /> View project
            </MDBBtn>
            </a>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="https://user-images.githubusercontent.com/47402849/65207075-9a2e0900-da5e-11e9-8e4d-abfd6edd0f9a.png"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Finder's Keeper's App</h4>
            <p className="grey-text">
             Human Resource App to help low-income New Yorkers find job centers in their neighborhoods 
            that offer Temporary assistance and other resources available if eligible.
            </p>
            <a href="https://nycresources.herokuapp.com/"> <MDBBtn gradient="purple" size="sm">
              <MDBIcon far icon="clone" className="left" />View project
            </MDBBtn>
            </a>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="https://user-images.githubusercontent.com/47402849/65207158-d2354c00-da5e-11e9-90ba-c3ada6ec66cf.png"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Excel4Kids Learning App</h4>
            <p className="grey-text">
            Academic LMS with Parent and Children portals offering children tools/resources 
            such as Reading Comprehension, Writing Techniques, & Study session/groups.
            </p>
            <a href="https://naughty-clarke-83029d.netlify.com"><MDBBtn gradient="purple" size="sm">
              <MDBIcon far icon="clone" className="left" />View project
            </MDBBtn>
            </a>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>

    </section>
  
  );
}

export default Projects;