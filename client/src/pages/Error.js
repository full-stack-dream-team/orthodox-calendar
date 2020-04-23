import React from "react";
import { Link } from "react-router-dom";

const Error = () => (
  <div className="main">
    <div className="card">
      <h2>
        <code>Could not find the page you are looking for!</code>
        <span role="img" aria-label="disappointed">
          😞
        </span>
      </h2>
      <Link to="/">← Back to home ヽ(´▽`)/</Link>
    </div>
  </div>
);

export default Error;
