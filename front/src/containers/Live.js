import React, { Component } from "react";
import TextInput from "../components/TextInput";
import Message from "../components/Message";

class Live extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };
  }
  onSubmit = text => {
    const message = { text: text, timestamp: Date.now() };
    this.setState({ messages: this.state.messages.concat(message) });
  };

  render() {
    return (
      <div>
        <TextInput onSubmit={this.onSubmit} />
        {this.state.messages
          .sort((a, b) => b.timestamp - a.timestamp)
          .map(message => (
            <Message key={message.timestamp} text={message.text} />
          ))}
      </div>
    );
  }
}

export default Live;
