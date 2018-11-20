import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MainNav from "../components/MainNav";
import Home from "../containers/Home";
import Live from "../containers/Live";

const Router = () => (
  <BrowserRouter>
    <div>
      <MainNav />
      <main className="main-content">
        <Route path="/" exact component={Home} />
        <Route path="/live/" component={Live} />
      </main>
    </div>
  </BrowserRouter>
);

export default Router;
