import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { logoutUser } from "../redux/actions/authActions";

const App = (props) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (!products) {
      getProducts();
    }
  });

  const getProducts = async () => {
    let res = await getAll();
    setProducts(res);
  };

  const getAll = async () => {
    let res = await axios.get(`/api/product`);
    return res.data || [];
  };

  return (
    <div className="App main">
      <button onClick={props.logoutUser}>Log Out</button>
      <div className="card">
        <ul>
          {products && products.length > 0 ? (
            products.map((product) => (
              <li key={product._id}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </li>
            ))
          ) : (
            <p>No products found</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default connect(undefined, { logoutUser })(App);
