import React from "react";
import { MDBIcon, MDBContainer, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color=" rgba-brown-strong" className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} <p> Shaniece Crumpler </p>
          <br></br>
          <ul className="list-inline text-center list-unstyled">
                <li className="list-inline-item">
                  <a href="https://www.instagram.com/niecey_thediva/" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="instagram" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/shaniece-crumpler-80937062/" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="linkedin-in" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://github.com/niecey0123" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="github" />
                  </a>
                </li>
              </ul>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer