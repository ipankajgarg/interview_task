import React from "react";
import { Button, Modal, Form, Input, Radio, Select } from "antd";

const FormItem = Form.Item;
const Option = Select.Option;

class CollectionCreateForm extends React.Component {
  render() {
    const { visible, onCancel, onCreate, form } = this.props;

    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={visible}
        title="Create a new collection"
        okText="Create"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form layout="vertical">
          <FormItem label="Company Name">
            {getFieldDecorator("name", {
              rules: [
                {
                  required: true,
                  message: "Please input the title of collection!"
                }
              ]
            })(<Input />)}
          </FormItem>
          <FormItem label="Company Website">
            {getFieldDecorator("website", {
              rules: [
                {
                  required: true,
                  message: "Please input the title of collection!"
                }
              ]
            })(<Input />)}
          </FormItem>
          <FormItem label="Company Address">
            {getFieldDecorator("address", {
              rules: [
                {
                  required: true,
                  message: "Please input the title of collection!"
                }
              ]
            })(<Input />)}
          </FormItem>
          <FormItem label="Company Work Categoory">
            validator =
            {getFieldDecorator("work_category", {
              initialValue: "technical",
              rules: [
                {
                  required: true,
                  message: "Please select atleast one keyword"
                }
              ]
            })(
              <Select style={{ width: "100%" }}>
                <Option value="technical">technical</Option>
                <Option value="BPO">BPO</Option>

                <Option value="Boring">Boring</Option>
              </Select>
            )}
          </FormItem>
          <FormItem label="Admin EmailId">
            {getFieldDecorator("admin_email", {
              rules: [
                {
                  required: true,
                  message: "Please input the title of collection!"
                }
              ]
            })(<Input />)}
          </FormItem>
          <FormItem label="Subdomain Name">
            {getFieldDecorator("sub_domain", {
              rules: [
                {
                  required: true,
                  message: "Please input the title of collection!"
                }
              ]
            })(<Input />)}
          </FormItem>
          <FormItem label="Contact Number">
            {getFieldDecorator("contact", {
              rules: [
                {
                  required: true,
                  message: "Please input the title of collection!"
                }
              ]
            })(<Input />)}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}
const Wrapped = Form.create()(CollectionCreateForm);
export default Wrapped;
