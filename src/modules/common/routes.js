import React from "react";
import { Route, IndexRoute } from "react-router-3"; ///indexroute is used as default route whenever request will come for '/' indexRoutw will be served
import App from "./App";
import Login from "../login/components/Login";
import Home from "../home/components/Home";
import CreateArticle from "../createArticle/component/CreateArticle";
import Authentication from "./AuthenticationMiddleware";
import Form from "../createArticle/component/Form";
import EditArticle from "../createArticle/component/EditArticle";

const greeting = () => {
  return <div>hey there!</div>;
};
const login = () => {
  return <div>login</div>;
};

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Authentication(Home)} />
    <Route path="login" component={Authentication(Login)} />
    <Route path="create/article" component={Authentication(CreateArticle)} />
    <Route path="edit/article/:id" component={Authentication(EditArticle)} />

    <Route path="greeting" component={greeting} />
    <Route path="hello" component={login} />
  </Route>
);
