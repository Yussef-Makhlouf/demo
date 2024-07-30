// src/components/Footer.js
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark text-white text-center py-5 mt-5 ">
        <div className="container d-grid gap-3">
          <h4>GET IN TOUCH</h4>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className='me-2' />yussef.ali.iti@gmail.com<br />
            <FontAwesomeIcon icon={faPhone} /> +20 1101-675-983
          </p>
          <div>
            <a href="#" className="text-white mx-2"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
            <a href="#" className="text-white mx-2"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
            <a href="#" className="text-white mx-2"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
          </div>
          <button className="btn btn-outline-light mt-3 w-25 mx-auto">Contact Me</button>
          <p className="mt-3">&copy; 2024 Yussef</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
