import React, { Component } from "react";
import CreateArticle from "./CreateArticle";
import { connect } from "react-redux";
import { fetchArticle } from "../actions/articleActions";
class EditArticle extends Component {
  componentWillMount() {
    this.props.fetchArticle(this.props.params.id);
    console.log("props", this.props.params);
  }
  render() {
    return <CreateArticle data={this.props.article} />;
  }
}

const mapStateToProps = state => {
  return {
    article: state.article
  };
};
export default connect(
  mapStateToProps,
  { fetchArticle }
)(EditArticle);
