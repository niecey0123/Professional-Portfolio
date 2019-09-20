import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn, MDBProgress, MDBAnimation } from "mdbreact";

const BlogPage = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Skills
        </h2>
    
        <MDBRow>
          <MDBCol lg="5">
          <MDBAnimation type="slideInLeft" duration="2s" delay="1s">

            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://user-images.githubusercontent.com/47402849/65211519-03b51400-da6d-11e9-8142-f08976522aaa.png"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            </MDBAnimation>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="green-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="laptop-code" className="pr-2" />
                Languages 
              </h6>
            </a>
            
                <>
                <MDBAnimation type="slideInRight" duration="2s" delay="1s">
     <h5>HTML</h5>
      <MDBProgress  material value={90} color="success" height="20px">90%</MDBProgress>

      <h5>CSS</h5>

      <MDBProgress  material value={85} color="success" height="20px">85%</MDBProgress>

      <h5>REACT</h5>

      <MDBProgress  material value={85} color="success" height="20px">85</MDBProgress>

      <h5>JAVASCRIPT</h5>

      <MDBProgress  material value={80} color="success" height="20px">80%</MDBProgress>

      <h5>NODE</h5>

      <MDBProgress  material value={75} color="warning" height="20px">75%</MDBProgress>

      <h5>RUBY/RAILS</h5>

      <MDBProgress  material value={70} color="warning" height="20px">70%</MDBProgress>

      <h5>EXPRESS</h5>

      <MDBProgress  material value={60} color="danger" height="20px">60%</MDBProgress>
      </MDBAnimation>

    </>
            <a href="https://docdro.id/nWpkqhF"><MDBBtn gradient="purple" size="md" className="waves-light ">
              view resume
            </MDBBtn>
            </a>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
      </MDBCardBody>
    </MDBCard>
  );
}

export default BlogPage;