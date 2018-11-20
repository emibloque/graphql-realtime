import React, { Component } from "react";
import entries from "../data/entries";
import Card from "../components/Card";

class Home extends Component {
  render() {
    return (
      <div>
        {entries.map((entry, i) => (
          <Card {...entry} key={entry.id} />
        ))}
      </div>
    );
  }
}

export default Home;
