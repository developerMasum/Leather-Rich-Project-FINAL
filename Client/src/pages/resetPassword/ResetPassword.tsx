/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input } from "antd";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { MdOutlineKey } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { useResetPasswordMutation } from "../../redux/features/auth/authApi";
import { toast } from "sonner";

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [token, setToken] = useState("");
  const [resetPassword, { isLoading }] = useResetPasswordMutation("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    const token = searchParams.get("token");

    setId(id);
    setToken(token);
  }, [location]);

  const onFinish = async (values: { newPassword: string }) => {
    const userInfo = {
      id,
      token,
      newPassword: values.newPassword,
    };
    console.log(userInfo);
    try {
      const res = await resetPassword(userInfo).unwrap();

      if (res?.message) {
        toast.success(res?.message);
        navigate("/login");
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };
  const parent = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    // <div className="w-full flex p-20 justify-center ">
    //   <motion.div
    //     variants={parent}
    //     initial="hidden"
    //     animate="visible"
    //     transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
    //     className="w-[500px] py-10 px-20 rounded-lg  border-[2px] shadow border-neutral-100 "
    //   >
    //     <motion.div
    //       whileHover={{ x: 10 }}
    //       transition={{ type: "spring", stiffness: 200, damping: 20 }}
    //       className="flex items-center justify-center space-y-7"
    //     >
    //       <img
    //         src={logo}
    //         alt="trendy"
    //         className="h-[50px] w-[100px] mt-2 object-fill mr-4 rounded"
    //       />
    //     </motion.div>
    //     <h2 className="text-2xl font-bold mb-4 text-center text-textprimary">
    //       Reset Password
    //     </h2>
    //     <Form
    //       name="register"
    //       onFinish={onFinish}
    //       layout="vertical"
    //       className="space-y-4"
    //     >
    //       <Form.Item
    //         label="Password"
    //         name="password"
    //         rules={[
    //           { required: true, message: "Please input your password" },
    //           {
    //             min: 6,
    //             message: "Password must be at least 6 characters long",
    //           },
    //         ]}
    //       >
    //         <Input.Password placeholder="Enter your new password" />
    //       </Form.Item>

    //       <Form.Item>
    //         <Button className="btn" loading={isLoading} htmlType="submit" block>
    //           Submit
    //         </Button>

    //       </Form.Item>
    //     </Form>
    //   </motion.div>
    // </div>

    <div className="w-full flex justify-center p-10">
      <motion.div
        variants={parent}
        initial="hidden"
        animate="visible"
        transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
        className="w-[500px] py-10 px-12 rounded-lg border-[2px] border-neutral-100 shadow-lg bg-white"
      >
        <motion.div
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="flex flex-col items-center justify-center space-y-0"
        >
          <MdOutlineKey className="text-5xl text-primary" />
          <h2 className="text-2xl font-bold my-4 text-center text-primary">
            Reset Password
          </h2>
        </motion.div>

        <Form
          name="reset-password"
          onFinish={onFinish}
          layout="vertical"
          className="space-y-4"
        >
          <Form.Item
            label="Password"
            name="newPassword"
            rules={[
              { required: true, message: "Please input your password" },
              {
                min: 6,
                message: "Password must be at least 6 characters long",
              },
            ]}
          >
            <Input.Password placeholder="Enter your new password" />
          </Form.Item>
          <Form.Item>
            <Button className="btn" loading={isLoading} htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </motion.div>
    </div>
  );
};

export default ResetPassword;
