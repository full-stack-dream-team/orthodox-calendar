import React from "react";
import { Link } from "react-router-dom";

const Oops = () => (
  <>
    <h1>OOPS!</h1>
    <p>Something went wrong!</p>
    <Link to="/">← Back to home</Link>
  </>
);

export default Oops;
