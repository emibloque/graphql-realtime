const express = require("express");
const cors = require("cors");
const { buildSchema } = require("graphql");
const graphqlHTTP = require("express-graphql");
const postsList = require("./posts");

const port = 3000;

const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
  }

  type Post {
    id: ID!
    image: String!
    likes: Int!
    author: User!
    comments: [Comment]
  }

  type Comment {
    id: ID!
    text: String!
    author: User!
  }




  type Query {
    posts: [Post]
  }

  type Mutation {
    addLike(postId: ID): Post
  }
`);

const root = {
  posts: () => {
    return postsList;
  },

  addLike: ({ postId }) => {
    const id = parseInt(postId);
    for (const post of postsList) {
      if (post.id === id) {
        post.likes++;
        return post;
      }
    }

    throw Error("Post not found");
  }
};

const app = express();
app.use(cors());
app.use(
  "/",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(port);
console.log("GraphQL API server running at localhost:" + port);
