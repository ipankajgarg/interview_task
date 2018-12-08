import React, { Component } from "react";
import {
  Form,
  Icon,
  Input,
  Button,
  Modal,
  Row,
  Col,
  Select,
  Upload,
  message,
  notification
} from "antd";
import { connect } from "react-redux";
import { createArticle } from "../actions/articleActions";

const token = localStorage.getItem("token");
const url = "";

const FormItem = Form.Item;
const Option = Select.Option;

const Dragger = Upload.Dragger;
class CreateArticle extends Component {
  state = {
    url: "",
    previewVisible: false,
    previewImage: "",
    fileList: []
  };

  componentWillMount() {}

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(
      (err, { category, title, summary, keyword, content }) => {
        if (!err && this.state) {
          this.props.createArticle({
            title: title,
            category: category,
            summary,
            coverImage:
              this.state.fileList[0].response.data.url || this.props.coverImage,
            keyword,
            text: content,
            isDraft: false
          });
        }
      }
    );
  };
  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  };
  handleCancel = () => this.setState({ previewVisible: false });
  handleChange = info => {
    console.log("info", info);
    this.setState({
      fileList: info.fileList
    });

    console.log(this.state);
  };

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    // let props = {
    //   onPreview: this.handlePreview,
    //   listType: "picture-card",
    //
    //   name: "banner",
    //   action: "https://api.rendemo.com/article/upload_banner/",
    //   method: "PUT",
    //   headers: {
    //     "AUTH-TOKEN": token,
    //     "USER-TYPE": "admin"
    //   },
    //   onChange: info => {
    //     if (info.file.status !== "uploading") {
    //       this.setState({ fileList: [] });
    //     }
    //     if (info.file.status === "done") {
    //       message.success(`${info.file} file uploaded successfully`);
    //
    //       this.setState({
    //         url: info.file.response.data.url,
    //         fileList: [{ url: info.file.response.data.url }]
    //       });
    //       console.log("uploaded", info.file, "state", this.state);
    //     } else if (info.file.status === "error") {
    //       message.error(`${info.file.name} file upload failed.`);
    //     }
    //   }
    // };
    console.log("props data", this.props.data);
    const { getFieldDecorator } = this.props.form;
    if (this.props.data) {
      var {
        title,
        text,
        category,
        summary,
        coverImage,
        keyword
      } = this.props.data;
      category = category.map(item => item.name);
      coverImage = [{ response: { data: { url: coverImage } }, uid: "2" }];
    }

    // else {
    //   var title, text, category, summary, coverImage, keyword;
    //   title = text = summary = coverImage = "";
    // }

    return (
      <Row type="flex" justify="center">
        <Col span={12}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem label="Title">
              {getFieldDecorator("title", {
                initialValue: title || "",
                rules: [{ required: true, message: "Please input your title!" }]
              })(<Input style={{ height: "40px" }} placeholder="Title" />)}
            </FormItem>
            <FormItem label="Category">
              {getFieldDecorator("category", {
                initialValue: category || [],
                rules: [
                  { required: true, message: "Please select atleast one" }
                ]
              })(
                <Select mode="multiple" style={{ width: "100%" }}>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>

                  <Option value="3">3</Option>
                </Select>
              )}
            </FormItem>
            <FormItem label="Summary">
              {getFieldDecorator("summary", {
                initialValue: summary || "",
                rules: [
                  { required: true, message: "Please input your summary!" }
                ]
              })(<Input style={{ height: "40px" }} placeholder="Summary" />)}
            </FormItem>
            <FormItem label="Banner">
              {getFieldDecorator("Banner", {
                rules: [
                  { required: true, message: "Please select your banner" }
                ]
              })(
                <Upload
                  action="https://api.rendemo.com/article/upload_banner/"
                  listType="picture-card"
                  fileList={fileList.length == 1 || coverImage}
                  onPreview={this.handlePreview}
                  onChange={this.handleChange}
                  name="banner"
                  method="PUT"
                  headers={{
                    "AUTH-TOKEN": token,
                    "USER-TYPE": "admin"
                  }}
                >
                  {fileList.length == 1 ? null : uploadButton}
                </Upload>
              )}
              <Modal
                visible={previewVisible}
                footer={null}
                onCancel={this.handleCancel}
              >
                <img
                  alt="example"
                  style={{ width: "100%" }}
                  src={previewImage}
                />
              </Modal>
            </FormItem>
            <FormItem label="Keyword">
              {getFieldDecorator("keyword", {
                initialValue: keyword || [],
                rules: [
                  {
                    required: true,
                    message: "Please select atleast one keyword"
                  }
                ]
              })(
                <Select mode="multiple" style={{ width: "100%" }}>
                  <Option value="kl">kl</Option>
                  <Option value="kk">kk</Option>

                  <Option value="km">km</Option>
                </Select>
              )}
            </FormItem>
            <FormItem label="content">
              {getFieldDecorator("content", {
                initialValue: text || "",
                rules: [
                  { required: true, message: "Please input your content" }
                ]
              })(
                <textarea
                  style={{ width: "500px", height: "250px" }}
                  placeholder="enter some content"
                />
              )}
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Save
              </Button>
            </FormItem>
          </Form>
        </Col>
      </Row>
    );
  }
}

const Wrapped = Form.create()(CreateArticle);

export default connect(
  null,
  { createArticle }
)(Wrapped);
