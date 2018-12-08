import React, { Component } from "react";

import { browserHistory } from "react-router-3";
export default function(ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      const token = localStorage.getItem("token");
      if (this.props.location.pathname === "/login" && token) {
        browserHistory.push("/");
      } else if (!token) {
        browserHistory.push("/login");
      }
    }
    // componentWillUpdate(nextProps) {
    //   if (!nextProps.authenticated) {
    //     this.context.router.push("/");
    //   }
    // }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }
  // function mapStateToProps(state) {
  //   return { authenticated: state.authenticated };
  // }

  return Authentication;
}
