import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer cyan darken-1">
        <div
          className="footer-copyright"
          style={{ backgroundColor: "transparent" }}
        >
          <div className="container">
            <span style={{ fontWeight: "800" }}>Glory Be To God!</span> --- ☦
            --- © 2021 Made with ♥ by{" "}
            <a
              style={{ textDecoration: "underline" }}
              className="white-text"
              href="https://kelly-devs-portfolio.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kelly Web Devs
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
