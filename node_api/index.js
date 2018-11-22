const express = require("express");
const { buildSchema } = require("graphql");
const graphqlHTTP = require("express-graphql");

const schema = buildSchema(`
  type Story {
    image: String!
  }

  type Query {
    stories: [Story]
  }
`);

const root = {
  stories: () => {
    return [
      { image: "url1" },
      { image: "url2" },
      { image: "url33" },
      { image: "url1" },
      { image: "url2" },
      { image: "url33" }
    ];
  }
};

const app = express();
app.use(
  "/",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(3000);
console.log("GraphQL API server running at localhost:" + port);
