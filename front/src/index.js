import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Router from "./containers/Router";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:4000/api"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router />
  </ApolloProvider>,
  document.getElementById("root")
);
