
import React from "react";
import { Result, Button } from "antd";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-900">
      <div className="w-full max-w-md">
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={
            <Button type="primary" danger href="/">
              Back Home
            </Button>
          }
        />
      </div>
    </div>
  );
};

export default NotFound;
