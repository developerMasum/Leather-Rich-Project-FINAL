/* eslint-disable @typescript-eslint/no-unused-vars */
import image from "./..//../assets/images/PNG-Richkid-Logo.png";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, useCurrentUser } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";

import { FaLandMineOn } from "react-icons/fa6";
import { BellFilled, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Badge, Button, List, Modal } from "antd";

import { useState } from "react";
import { TOrder, TReview } from "../../types/global.type";
import { clearReviewItems } from "../../redux/features/review/reviewSlice";
import { clearOrderItems } from "../../redux/features/order/orderSlice";


const CustomeHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const user = useAppSelector(useCurrentUser);
  console.log(user)

  const review = useAppSelector((state) => state.review);
  const order = useAppSelector((state) => state.order);

  const dispatch = useAppDispatch();

  const reviewsData = review.reviewItems;
  const ordersData = order.orderItems;

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout successfully");
  };

  //for modal---
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    dispatch(clearReviewItems());
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //for order modal

  const showOrderModal = () => {
    setIsOrderModalOpen(true);
  };

  const handleOrederModalOk = () => {
    setIsOrderModalOpen(false);
    dispatch(clearOrderItems());
  };

  const handleCancelOrderModal = () => {
    setIsOrderModalOpen(false);
  };

  return (
    <motion.div className="flex px-2 md:py-2 sm:px-1 md:px-8  justify-between items-center space-y-2 md:space-y-0 bg-neutral-50 border-b-[2px] shadow-sm  fixed top-0 left-0 right-0 z-10 " 
     initial={{ y: -150 }}
    animate={{ y: 0 }}
    transition={{ delay: 0.5, duration: 0.5 }}>
      <motion.div
        whileHover={{ x: 10 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="flex items-center"
      >
        <Link to="/">
          <img
            src={image}
            alt="trendy"
            className="h-[50px] w-[100px] object-fill mr-4 rounded"
          />
        </Link>
      </motion.div>

      <div>
        {user?.role === "user" ? 
          <div className="  font-sans text-base leading-normal ">
            <p>
              Hello, <span className="font-semibold">{user?.name}</span>,
            </p>
            <p className="text-balance">Welcome to Trendy</p>
          </div>
        : (
          <Button
            className="uppercase  md:block tracking-wider font-semibold text-primary"
            icon={<FaLandMineOn />}
          >
            {user?.role}
          </Button>
        )}
      </div>

      <div className="flex justify-center items-center gap-6">
     {
    user?.role==="superAdmin" && <span className="flex justify-center items-center gap-6">   <Badge count={review.reviewItems.length}>
    <MailOutlined className="text-[24px]" onClick={showModal} />
  </Badge>
  <Badge count={order.orderItems.length}>
    <BellFilled className="text-[24px]" onClick={showOrderModal} />
  </Badge></span>
     }
        <Button
          icon={<UserOutlined />}
          className="uppercase tracking-wide text-white font-semibold bg-primary"
          onClick={handleLogout}
        >
          Logout
        </Button>

        {/* for order modal */}

        <Modal
          title="Order Product"
          open={isOrderModalOpen}
          onOk={handleOrederModalOk}
          onCancel={handleCancelOrderModal}
        >
          <List
            className="bg-gray-200/50 px-5 rounded-md"
            dataSource={ordersData}
            renderItem={(item: TOrder) => {
              return (
                <List.Item>{` ${item.name}, has oreded. ${item.orderNumber}`}</List.Item>
              );
            }}
          />
        </Modal>

        {/* for review modal */}
        <Modal
          title="Product Reviews"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <List
            className="bg-gray-200/50 px-5 rounded-md"
            dataSource={reviewsData}
            renderItem={(item: TReview) => {
              return (
                <List.Item>{`Name: ${item.name}, Comments: ${item.description}`}</List.Item>
              );
            }}
          />
        </Modal>
      </div>
    </motion.div>
  );
};

export default CustomeHeader;
