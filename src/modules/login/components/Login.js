import React from "react";
import { Form, Icon, Input, Button } from "antd";
import { connect } from "react-redux";
import { loginContainer, page_heading } from "../styles";
import { onLogin } from "../actions/loginActions";

const FormItem = Form.Item;

class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onLogin(values, this.props.history);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={loginContainer}>
        <h1 className={page_heading}> Reniso Admin </h1>
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator("identifier", {
              rules: [
                { required: true, message: "Please input your identifier!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="identifier"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </FormItem>
          <FormItem>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Login
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(Login);
export default connect(
  null,
  { onLogin }
)(WrappedNormalLoginForm);
