import React, { Component } from "react";
import Card from "../components/Card";

import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const ADD_LIKE = gql`
  mutation AddLike($postId: ID!) {
    addLike(postId: $postId) {
      id
    }
  }
`;

class CardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: false,
      likes: props.likes
    };
  }

  toggleLike = addLike => {
    if (!this.state.liked) {
      this.setState({ liked: true });
      this.setState({ likes: this.state.likes + 1 });
      addLike({ variables: { postId: this.props.id } });
    } else {
      this.setState({ liked: false });
      this.setState({ likes: this.state.likes - 1 });
    }
  };

  render() {
    return (
      <Mutation mutation={ADD_LIKE}>
        {addLike => (
          <Card
            key={this.props.id}
            onToggleLike={() => this.toggleLike(addLike)}
            {...this.props}
            liked={this.state.liked}
            likes={this.state.likes}
          />
        )}
      </Mutation>
    );
  }
}

export default CardContainer;
