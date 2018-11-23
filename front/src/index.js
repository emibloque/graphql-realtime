import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Router from "./containers/Router";

import { ApolloProvider } from "react-apollo";

import ApolloClient from "apollo-client";
import { ApolloLink } from "apollo-link";
import { createHttpLink } from "apollo-link-http";
import { hasSubscription } from "@jumpn/utils-graphql";
import { InMemoryCache } from "apollo-cache-inmemory";

import * as AbsintheSocket from "@absinthe/socket";
import { createAbsintheSocketLink } from "@absinthe/socket-apollo-link";
import { Socket as PhoenixSocket } from "phoenix";

const absintheSocketLink = createAbsintheSocketLink(
  AbsintheSocket.create(new PhoenixSocket("ws://localhost:8888/socket"))
);
const link = new ApolloLink.split(
  operation => hasSubscription(operation.query),
  absintheSocketLink,
  createHttpLink({ uri: "http://localhost:4000/api" })
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router />
  </ApolloProvider>,
  document.getElementById("root")
);
