import React, { Component } from "react";
import CardContainer from "./CardContainer";

import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_POSTS = gql`
  {
    posts {
      id
      image
      likes
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
      <Query query={GET_POSTS}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return data.posts.map(post => (
            <CardContainer
              key={post.id}
              {...post}
            />
          ));
        }}
      </Query>
    );
  }
}

export default Home;
