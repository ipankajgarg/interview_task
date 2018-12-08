import React, { Component } from "react";

import { Layout, Menu, Icon } from "antd";
import { Link, browserHistory } from "react-router-3";

const { Footer, Sider, Content } = Layout;
class App extends Component {
  slider() {
    console.log(this.props);
    if (this.props.location.pathname !== "/login") {
      console.log("match");
      return (
        <Sider>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Icon type="book" />

              <span className="nav-text">
                <Link style={{ color: "grey", textDecoration: "none" }} to="/">
                  Home
                </Link>
              </span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="edit" />
              <span className="nav-text">
                <Link
                  style={{ color: "grey", textDecoration: "none" }}
                  to="/create/article"
                >
                  CreateArticle
                </Link>
              </span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="logout" />
              <span
                onClick={() => {
                  localStorage.removeItem("token");
                  browserHistory.push("/login");
                }}
                className="nav-text"
              >
                Logout
              </span>
            </Menu.Item>
          </Menu>
        </Sider>
      );
    }
  }

  render() {
    return (
      <div>
        <Layout style={{ minHeight: "100vh" }}>
          <Layout>
            <Content
              style={{ padding: 24, background: "#fff", minHeight: "80vh" }}
            >
              {this.props.children}
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
