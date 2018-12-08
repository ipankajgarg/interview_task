import React, { Component } from "react";
import CreateArticle from "./CreateArticle";

class Form extends Component {
  render() {
    console.log("props", this.props);
    return <CreateArticle />;
  }
}
export default Form;
