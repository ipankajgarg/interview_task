import React, { Component } from "react";
import {
  Table,
  Divider,
  Tag,
  Spin,
  Button,
  Modal,
  Form,
  Input,
  Radio
} from "antd";

import { connect } from "react-redux";
import { browserHistory, Link } from "react-router-3";
import {
  fetchCompany,
  deleteCompany,
  createCompany,
  loadingFun
} from "../actions/homeActions";
import { List, Icon } from "antd";
import CollectionCreateForm from "./ModalForm";

// const record = { id: 2 };

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires."
];
class Home extends Component {
  state = { visible: false };
  componentWillMount() {
    this.props.fetchCompany();
  }
  showModal = () => {
    this.props.loadingFun();
    // this.setState({ visible: true });
  };

  handleCancel = () => {
    this.props.loadingFun();
    // this.setState({ visible: false });
  };

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      values.schema_name = values.name;
      this.props.createCompany(values);

      // form.resetFields();
      // this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  delete = id => {
    console.log(id);
    var rel = window.confirm("Are you sure ");
    if (rel) {
      console.log(rel);
      this.props.deleteCompany({ company_id: id });
    }
  };

  render() {
    console.log("companies", this.props.companies);
    return (
      <div>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.props.Loading}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />

        <Icon onClick={this.showModal} className="add" type="plus-circle" />

        <List
          size="large"
          dataSource={this.props.companies}
          renderItem={item => (
            <List.Item
              actions={[<a onClick={() => this.delete(item.id)}>delete</a>]}
            >
              {item.name}
            </List.Item>
          )}
        />
      </div>
    );
  }
}
const mapStateToProps = ({ companies, Loading }) => {
  return {
    companies,
    Loading
  };
};

export default connect(
  mapStateToProps,
  { fetchCompany, deleteCompany, createCompany, loadingFun }
)(Home);
