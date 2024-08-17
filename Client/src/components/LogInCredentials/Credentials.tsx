/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { CopyOutlined } from "@ant-design/icons";
import { Button, message, Modal } from "antd";

const Credential = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [copiedUserEmail, setCopiedUserEmail] = useState(false);
  const [copiedUserPassword, setCopiedUserPassword] = useState(false);
  const [copiedAdminEmail, setCopiedAdminEmail] = useState(false);
  const [copiedAdminPassword, setCopiedAdminPassword] = useState(false);

  const userCredentials = {
    email: "farhan@gmail.com",
    password: "12345678",
  };

  const adminCredentials = {
    email: "sobujapm87@gmail.com",
    password: "superadmin",
  };

  const handleCopy = (text: any, setCopied: any) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        message.success("Credentials copied to clipboard!");
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        message.error("Failed to copy credentials!");
      });
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="dashed" className="text-emerald-500" onClick={showModal}>
        Show Login Credentials
      </Button>
      <Modal
        title="Login Credentials"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Close"
        cancelButtonProps={{ style: { display: "none" } }}
      >
        {/* Admin Credentials */}
        <div className="mb-2">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Admin Credentials
          </h3>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-gray-700 font-medium">Email:</span>
                <span className="text-gray-600">{adminCredentials.email}</span>
              </div>
              <Button
                type="link"
                icon={<CopyOutlined />}
                onClick={() =>
                  handleCopy(adminCredentials.email, setCopiedAdminEmail)
                }
              >
                {copiedAdminEmail ? "Copied!" : "Copy Email"}
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-gray-700 font-medium">Password:</span>
                <span className="text-gray-600">
                  {adminCredentials.password}
                </span>
              </div>
              <Button
                type="link"
                icon={<CopyOutlined />}
                onClick={() =>
                  handleCopy(adminCredentials.password, setCopiedAdminPassword)
                }
              >
                {copiedAdminPassword ? "Copied!" : "Copy Password"}
              </Button>
            </div>
          </div>
        </div>

        {/* User Credentials */}
        <div className="mb-2">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            User Credentials
          </h3>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-gray-700 font-medium">Email:</span>
                <span className="text-gray-600">{userCredentials.email}</span>
              </div>
              <Button
                type="link"
                icon={<CopyOutlined />}
                onClick={() =>
                  handleCopy(userCredentials.email, setCopiedUserEmail)
                }
              >
                {copiedUserEmail ? "Copied!" : "Copy Email"}
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-gray-700 font-medium">Password:</span>
                <span className="text-gray-600">
                  {userCredentials.password}
                </span>
              </div>
              <Button
                type="link"
                icon={<CopyOutlined />}
                onClick={() =>
                  handleCopy(userCredentials.password, setCopiedUserPassword)
                }
              >
                {copiedUserPassword ? "Copied!" : "Copy Password"}
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Credential;
