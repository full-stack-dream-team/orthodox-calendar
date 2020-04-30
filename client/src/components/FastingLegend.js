import React, { Component } from "react";
import M from "materialize-css";

class FastingLegend extends Component {
  componentDidMount() {
    const options = {};
    M.Collapsible.init(Collapsible, options);
  }

  render() {
    const { day } = this.props;

    return <h2>test</h2>;
  }
}

export default FastingLegend;
