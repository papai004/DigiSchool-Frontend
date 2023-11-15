import { Button, Modal, notification } from "antd";
import React, { useState } from "react";
import downloadFileRequest from "../../lib/apis/downloadFileRequest";
import downloadFileFromBlob from "../../lib/util/downloadFileFromBlob";

const DownloadDataModal = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsLoading(true);
      const { isOk, data } = await downloadFileRequest(
        "/student/download_student_data",
        "POST",
        { limit: "10000" },
        true
      );
      if (isOk) {
        downloadFileFromBlob(data);
        notification.success({
          message:
            "Successfully downloaded student details. Please check your download folder",
        });
      } else {
        notification.error({
          message: "Something went wrong!",
        });
      }
      onClose();
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  return (
    <Modal open={true} onCancel={onClose} footer={null} maskClosable={false}>
      <h3 className="center">Download Student Data</h3>

      <p className="center">
        Download all the student details in <strong>CSV</strong> format. The
        downloaded file name will be <strong>student_data.csv</strong>{" "}
      </p>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <Button onClick={handleDownload} loading={isLoading} type="primary">
            Download
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DownloadDataModal;
