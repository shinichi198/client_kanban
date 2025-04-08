import { Avatar, Button, Form, Input, Modal, Select, Typography } from "antd";
import { User } from "iconsax-react";
import React, { useRef, useState } from "react";
import { colors } from "../constants/colors";
import { Link } from "react-router-dom";
import { uploadFile } from "../utils/uploadFile";
import { replaceName } from "../utils/replaceName";
import handleAPI from "../apis/handleAPI";
import { SupplierModel } from "../models/SupplierModel";

interface Props {
  visible: boolean;
  onClose: () => void;
  onAddNew: (val: SupplierModel) => void;
  supplier?: SupplierModel;
}
const { Paragraph } = Typography;
const ToogleSupplier = (props: Props) => {
  const { visible, onAddNew, onClose, supplier } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [isTaking, setIsTaking] = useState<boolean>();
  const [file, setFile] = useState<any>();
  const [form] = Form.useForm();
  const inpRef = useRef<HTMLInputElement>(null);
  const addNewSupplier = async (values: any) => {
    setIsLoading(true);
    const data: any = {};
    const api = `/supplier/add-new`;
    for (const i in values) {
      data[i] = values[i] ?? "";
    }
    data.price = values.price ? parseInt(values.price) : 0;
    data.isTaking = isTaking ? 1 : 0;
    if (file) {
      data.photoUrl = await uploadFile(file);
    }
    data.slug = replaceName(values.name);
    try {
      const res = await handleAPI(api, data, "post");
      onAddNew(res.data);
      handleClose();
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  const handleClose = () => {
    form.resetFields();
    setIsTaking(undefined);
    onClose();
  };
  return (
    <Modal
      title="Add Supplier"
      open={visible}
      okText="Add Supplier"
      cancelText="Discard"
      onClose={handleClose}
      onCancel={handleClose}
      onOk={() => form.submit()}
      okButtonProps={{
        loading: isLoading,
      }}
    >
      <label
        htmlFor="inpFile"
        className="p-2 mb-3 row text-center"
        style={{ justifyContent: "center", justifyItems: "center" }}
      >
        {file ? (
          <Avatar size={100} src={URL.createObjectURL(file)} />
        ) : (
          <Avatar
            size={100}
            style={{
              backgroundColor: "white",
              border: "1px dashed e0e0e0",
            }}
          >
            <User size={100} color={colors.gray600} />
          </Avatar>
        )}

        <div className="ml-3 col">
          <Paragraph className="text-muted m-0">Drag image here</Paragraph>
          <Paragraph className="text-muted mb-2">Or</Paragraph>
          <Button onClick={() => inpRef.current?.click()} type="link">
            Browse image
          </Button>
        </div>
      </label>
      <Form
        disabled={isLoading}
        layout="horizontal"
        onFinish={addNewSupplier}
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        size="large"
      >
        <Form.Item
          name={"name"}
          label="Supplier Name"
          rules={[
            {
              required: true,
              message: "Please enter supplier name",
            },
          ]}
        >
          <Input placeholder="Enter supplier name" allowClear />
        </Form.Item>
        <Form.Item name={"product"} label="Product">
          <Input placeholder="Enter product" allowClear />
        </Form.Item>
        <Form.Item name={"categories"} label="Category">
          <Select options={[]} placeholder="Select product category" />
        </Form.Item>
        <Form.Item name={"price"} label="Buying Price">
          <Input placeholder="Enter buying price" allowClear />
        </Form.Item>
        <Form.Item name={"contact"} label="Contact Number">
          <Input
            placeholder="Enter supplier contact number"
            type="number"
            allowClear
          />
        </Form.Item>
        <Form.Item label="Type">
          <div className="mb-3">
            <Button
              type={isTaking == false ? "primary" : "default"}
              onClick={() => setIsTaking(false)}
            >
              Not taking return
            </Button>
          </div>
          <Button
            type={isTaking ? "primary" : "default"}
            onClick={() => setIsTaking(true)}
          >
            Taking return
          </Button>
        </Form.Item>
      </Form>
      <div className="d-none">
        <input
          ref={inpRef}
          type="file"
          accept="image/*"
          name=""
          id="inpFile"
          onChange={(val: any) => setFile(val.target.files[0])}
        />
      </div>
    </Modal>
  );
};

export default ToogleSupplier;
