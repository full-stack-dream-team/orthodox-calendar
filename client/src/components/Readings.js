import React, { Component } from "react";

class Readings extends Component {
  render() {
    const { day } = this.props;

    return (
      <>
        <h2>Scripture Readings:</h2>
        <ul>
          {day.readings
            ? day.readings.map(reading => (
                <li key={reading.display}>
                  <div>
                    <h3>{reading.display}</h3>
                    {reading.passage.map(verse => (
                      <p key={verse.content}>{verse.content}</p>
                    ))}
                  </div>
                </li>
              ))
            : null}
        </ul>
      </>
    );
  }
}

export default Readings;
