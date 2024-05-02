/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

const TrackOrders = () => {
  const [orderCode, setOrderCode] = useState("");

  const handleInputChange = (e: any) => {
    setOrderCode(e.target.value);
  };

  const handleTrackOrder = () => {
    // Implement tracking logic here
    console.log("Tracking order with code:", orderCode);
    // You can send a request to the server to track the order using the orderCode
  };

  return (
    <div className="w-70vw mx-auto mt-12">
      <h1 className="text-xl font-semibold text-slate-700 mb-4 text-center">TRACK YOUR ORDER</h1>
      <div className="flex items-center justify-center">
        <input
          type="text"
          className="border border-gray-300 rounded px-3 py-2 mr-2 focus:outline-none w-7/12" // Adjust width here (w-full for full width)
          placeholder="Enter your order code"
          value={orderCode}
          onChange={handleInputChange}
        />
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-teal-800 focus:outline-none"
          onClick={handleTrackOrder}
        >
          Track My Order
        </button>
      </div>
    </div>
  );
};

export default TrackOrders;
