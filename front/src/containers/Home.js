import React, { Component } from "react";
import CardContainer from "./CardContainer";
import Story from "../components/Story";

import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_POSTS_AND_STORIES = gql`
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

    stories {
      id
      image
    }
  }
`;

class Home extends Component {
  render() {
    return (
      <Query query={GET_POSTS_AND_STORIES}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return (
            <div>
              <div className="stories-container">
                {data.stories &&
                  data.stories.map(story => (
                    <Story key={story.id} {...story} />
                  ))}
              </div>

              {data.posts.map(post => (
                <CardContainer key={post.id} {...post} />
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Home;
