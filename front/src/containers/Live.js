import React, { Component } from "react";
import TextInput from "../components/TextInput";
import Message from "../components/Message";

import gql from "graphql-tag";
import { Mutation, Subscription } from "react-apollo";

const ADD_MESSAGE = gql`
  mutation AddMessage($text: String!) {
    addMessage(text: $text) {
      timestamp
    }
  }
`;

const MESSAGE_ADDED = gql`
  subscription {
    messageAdded {
      timestamp
      text
    }
  }
`;

class Live extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };
  }
  addMessage = message => {
    this.setState({ messages: this.state.messages.concat(message) });
  };

  render() {
    return (
      <div>
        <Mutation mutation={ADD_MESSAGE}>
          {addComment => (
            <TextInput
              onSubmit={text => addComment({ variables: { text: text } })}
            />
          )}
        </Mutation>
        <Subscription subscription={MESSAGE_ADDED}>
          {({ data, loading }) => (
            <h4>Last comment: {!loading && data.messageAdded.text}</h4>
          )}
        </Subscription>
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
