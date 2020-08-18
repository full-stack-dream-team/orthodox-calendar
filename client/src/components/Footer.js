import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer cyan darken-1">
        <div className="footer-copyright">
          <div className="container">
            Glory Be To God!{" "}
            <span role="img" aria-label="love">
              ❤️
            </span>{" "}
            ©2020 Family I Love
            <span className="ml-5">
              <a href="mailto:info@familyilove.com" className="white-text">
                <i className="iconify" data-icon="mdi:email-outline"></i>{" "}
                Contact Us
              </a>
            </span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
