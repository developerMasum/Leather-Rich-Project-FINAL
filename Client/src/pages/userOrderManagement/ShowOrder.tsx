import { useGetMyOrdersQuery, useUpdateOrderCancelMutation } from "../../redux/features/order/orderApi";
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from "react";
import moment from "moment";
import CustomeDivider from "../../components/customeDivider/CustomeDivider";
import { Button, Space, Table } from "antd";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";


const ShowOrder = () => {
  const user = useAppSelector(useCurrentUser);

  const {
    data: orders,
    isLoading,
    isFetching,
  } = useGetMyOrdersQuery(user?.email);
  console.log(orders)

  const [cancelOrder]=useUpdateOrderCancelMutation();

  const handleCancel = async (id: string) => {
    console.log(id);
    try {
        const response= await cancelOrder(id)
        console.log(response)

    } catch (err:any) {
      console.log(err.message)
    }
  };
  const columns = [
    {
      title: "Order Serial",
      key: "orderNumber",
      dataIndex: "orderNumber",
    },
    {
      title: "Order Date",
      dataIndex: "orderDate",
      key: "orderDate",
      render: (text: string) => moment(text).format("MMMM Do YYYY"),
    },

    {
      title: "Order Amount",
      key: "totalPrice",
      dataIndex: "totalPrice",
      render: (price: number) => `৳${price}`,
    },
    {
      title: "Delivery Status",
      key: "deliveryStatus",
      dataIndex: "deliveryStatus",
    },
    {
      title: "Action",
      key: "operation",
      width: 100,
      render: (_: any, record: any) => (
        <Space size="small">
          <Button disabled={record.deliveryStatus==='shipped'} onClick={() => handleCancel(record._id)}>Cancel</Button>
        </Space>
      ),
    },
  ];



  return (
    <div className="p-10">
      <CustomeDivider title="Your's Orders" />
      <Table
        loading={isFetching || isLoading}
        columns={columns}
        dataSource={orders?.data}
      />
    </div>
  );
};

export default ShowOrder;