import React, { Component } from "react";
import entries from "../data/entries";
import CardContainer from "./CardContainer";

class Home extends Component {

  render() {
    return (
      <div>
        {entries.map((entry, i) => (
          <CardContainer key={entry.id} toggleLike={this.toggleLike} {...entry} />
        ))}
      </div>
    );
  }
}

export default Home;
