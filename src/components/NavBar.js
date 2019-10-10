
import React from 'react';
import {  MDBRow, MDBCol, MDBIcon ,
 MDBCardBody, MDBBtn, MDBView, MDBMask,
 MDBCard, MDBProgress, MDBAnimation ,MDBContainer  } from "mdbreact";




function NavBar(params) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="home">
     SC
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#toolKit">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#project">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
        <h4 id="home">
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
        </h4>

        <h4 id="about">
          <main>
            <section className="text-center my-5" id="about">
              <h2 className="h1-responsive font-weight-bold my-5">About me</h2>
              <p className="lead grey-text w-responsive mx-auto mb-5">
                Solution-driven Front End Developer excelling in highly
                collaborative work environments, finding solutions to challenges
                and focused on customer satisfaction. Proven experience
                developing consumer-focused web sites using HTML, CSS,
                JQuery,React and JavaScript. Responding to challenges by
                designing and developing solutions and building web applications
                aligned to customer's services.
              </p>
              <MDBRow>
                <MDBCol md="4">
                  <MDBIcon icon="male" size="3x" className="red-text" />
                  <h5 className="font-weight-bold my-4">User Experience</h5>
                  <p className="grey-text mb-md-0 mb-5">
                    Conceptualizing original ideas that bring simplicity and
                    user friendliness to complex design roadblocks
                  </p>
                </MDBCol>
                <MDBCol md="4">
                  <MDBIcon icon="code" size="3x" className="cyan-text" />
                  <h5 className="font-weight-bold my-4">Development</h5>
                  <p className="grey-text mb-md-0 mb-5">
                    Passion for developing,releasing, and maintaining
                    large-scale web applications.
                  </p>
                </MDBCol>
                <MDBCol md="4">
                  <MDBIcon
                    far
                    icon="comments"
                    size="3x"
                    className="orange-text"
                  />
                  <h5 className="font-weight-bold my-4">Collaborative</h5>
                  <p className="grey-text mb-md-0 mb-5">
                    Proactive team player with strong understanding of system
                    preferences, efficiency and building responsive front ends.
                  </p>
                </MDBCol>
              </MDBRow>
            </section>
          </main>
        </h4>

        <h4 id="toolKit">
          <MDBCard className="my-5 px-5 pb-5">
            <MDBCardBody>
              <h2 className="h1-responsive font-weight-bold text-center my-5">
                Skills
              </h2>

              <MDBRow>
                <MDBCol lg="5">
                  <MDBAnimation type="slideInLeft" duration="2s" delay="1s">
                    <MDBView
                      className="rounded z-depth-2 mb-lg-0 mb-4"
                      hover
                      waves
                    >
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
                      <MDBProgress
                        material
                        value={90}
                        color="success"
                        height="20px"
                      >
                        90%
                      </MDBProgress>

                      <h5>CSS</h5>

                      <MDBProgress
                        material
                        value={85}
                        color="success"
                        height="20px"
                      >
                        85%
                      </MDBProgress>

                      <h5>REACT</h5>

                      <MDBProgress
                        material
                        value={85}
                        color="success"
                        height="20px"
                      >
                        85
                      </MDBProgress>

                      <h5>JAVASCRIPT</h5>

                      <MDBProgress
                        material
                        value={80}
                        color="success"
                        height="20px"
                      >
                        80%
                      </MDBProgress>

                      <h5>NODE</h5>

                      <MDBProgress
                        material
                        value={75}
                        color="warning"
                        height="20px"
                      >
                        75%
                      </MDBProgress>

                      <h5>RUBY/RAILS</h5>

                      <MDBProgress
                        material
                        value={70}
                        color="warning"
                        height="20px"
                      >
                        70%
                      </MDBProgress>

                      <h5>EXPRESS</h5>

                      <MDBProgress
                        material
                        value={60}
                        color="danger"
                        height="20px"
                      >
                        60%
                      </MDBProgress>
                    </MDBAnimation>
                  </>
                  <a href="https://docdro.id/nWpkqhF">
                    <MDBBtn
                      gradient="purple"
                      size="md"
                      className="waves-light "
                    >
                      view resume
                    </MDBBtn>
                  </a>
                </MDBCol>
              </MDBRow>
              <hr className="my-5" />
            </MDBCardBody>
          </MDBCard>
        </h4>

        <h4 id="project">
          <section className="text-center my-5">
            <h2 className="h1-responsive font-weight-bold my-5">Projects</h2>
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
                  <h4 className="font-weight-bold my-3">
                    The Big O (Obstacle) Dress Up Game
                  </h4>
                  <p className="grey-text">
                    Children's Cognitive Training App tailored to help children
                    build up muscle memory by following timed instructions while
                    dressing up a character.
                  </p>
                  <a href="https:/wizardly-hypatia-64b87d.netlify.com">
                    {" "}
                    <MDBBtn gradient="purple" size="sm">
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
                  <h4 className="font-weight-bold my-3">
                    Finder's Keeper's App
                  </h4>
                  <p className="grey-text">
                    Human Resource App to help low-income New Yorkers find job
                    centers in their neighborhoods that offer Temporary
                    assistance and other resources available if eligible.
                  </p>
                  <a href="https://nyc-job-center.herokuapp.com">
                    {" "}
                    <MDBBtn gradient="purple" size="sm">
                      <MDBIcon far icon="clone" className="left" />
                      View project
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
                  <h4 className="font-weight-bold my-3">
                    Excel4Kids Learning App
                  </h4>
                  <p className="grey-text">
                    Academic LMS with Parent and Children portals offering
                    children tools/resources such as Reading Comprehension,
                    Writing Techniques, & Study session/groups.
                  </p>
                  <a href="https://naughty-clarke-83029d.netlify.com">
                    <MDBBtn gradient="purple" size="sm">
                      <MDBIcon far icon="clone" className="left" />
                      View project
                    </MDBBtn>
                  </a>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </section>
        </h4>
        <h4 id="contact">
          <MDBContainer>
            <div className="container">
              <div className="well well-sm">
                <h2 className="h1-responsive font-weight-bold my-5">Contact</h2>
              </div>
              <div className="row">
                <div className="col-md-7">
                  <iframe
                    src="https://maps.google.com/maps?q=1008%20saint%20marks%20ave&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height={315}
                    frameBorder={0}
                    style={{ border: 0 }}
                    allowFullScreen
                  />
                </div>
                <div className="col-md-5">
                  <h4>
                    <strong>Get in Touch</strong>
                  </h4>
                  <form action="POST" data-netlify="true">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="E-mail"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        placeholder="Phone"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        rows={3}
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                    <button
                      className="btn btn-default"
                      type="submit"
                      name="button"
                    >
                      <i className="fa fa-paper-plane-o" aria-hidden="true" />{" "}
                      Submit
                    </button>
                  </form>
                </div>
                <MDBAnimation reveal type="fadeInLeft">
                  <a href="home">
                    <MDBIcon
                      icon="arrow-alt-circle-up"
                      className="cyan-text  pr-3"
                      size="3x"
                    />
                  </a>
                </MDBAnimation>
              </div>
            </div>
          </MDBContainer>
        </h4>
      </div>
    </div>
  );
  
}

export default NavBar