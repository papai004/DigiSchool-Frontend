import { Button, Modal, Tag } from "antd";
import React from "react";

const StandardDeleteModal = ({ visible, onClose, payloadData }) => {
  console.log("payloadData =", payloadData);
  return (
    <Modal
      open={visible}
      onOk={onClose}
      onCancel={onClose}
      footer={null}
      maskClosable={false}
    >
      <h3>
        Do you really want to delete the standard{" "}
        <Tag color="blue">{payloadData.standard_name}</Tag>?
      </h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <Button danger style={{ marginRight: "0.4rem" }}>
            Yes
          </Button>
          <Button>No</Button>
        </div>
      </div>
    </Modal>
  );
};

export default StandardDeleteModal;
