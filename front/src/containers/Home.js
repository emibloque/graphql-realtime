import React, { Component } from "react";
import CardContainer from "./CardContainer";

import { Query } from "react-apollo";
import gql from "graphql-tag";

const query = gql`
  {
    posts {
      id
      image
      author {
        id
        name
      }
      comments {
        id
        text
        author {
          id
          name
        }
      }
    }
  }
`;

class Home extends Component {
  render() {
    return (
      <Query query={query}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return data.posts.map(post => (
            <CardContainer
              key={post.id}
              toggleLike={this.toggleLike}
              {...post}
            />
          ));
        }}
      </Query>
    );
  }
}

export default Home;
