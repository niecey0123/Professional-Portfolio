import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput,  MDBAnimation  } from 'mdbreact';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render(){
    const { name, email, message } = this.state;
  return (
    <MDBContainer>
       <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contact
      </h2>
      <MDBRow>
        <MDBCol md="11" className="md-0 mb-5">
          <form onSubmit={this.handleSubmit}>
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
              />
              <MDBInput
                type="textarea"
                rows="2"
                label="Your message"
                icon="pencil-alt"
                name="message"
                onChange={this.handleChange}
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
}

export default Contact;