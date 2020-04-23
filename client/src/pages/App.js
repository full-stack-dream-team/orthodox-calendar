import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { logoutUser } from "../redux/actions/authActions";

class App extends React.Component {
  state = {
    products: [],
  };

  unmounted = false;

  getAll = async () => {
    let res = await axios.get(`/api/product`);
    return res.data || [];
  };

  getProducts = async () => {
    let res = await this.getAll();
    if (!this.unmounted) {
      this.setState({ products: res });
    }
  };

  componentDidMount() {
    this.getProducts();
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  render() {
    const { products } = this.state;

    return (
      <div className="App main">
        <button onClick={this.props.logoutUser}>Log Out</button>
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
  }
}

export default connect(undefined, { logoutUser })(App);
