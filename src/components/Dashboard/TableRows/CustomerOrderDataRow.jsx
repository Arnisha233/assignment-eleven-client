import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router";

const CustomerOrderDataRow = ({ order, refetch }) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const { _id, image, name, quantity, status, transactionId } = order || {};
  console.log(order);

  const handleCancelOrder = async () => {
    try {
      const res = await axios.patch(
        `${import.meta.env.VITE_API_URL}/orders/reject/${_id}`
      );

      if (res.data.modifiedCount > 0) {
        toast.success("Order Cancelled!");
        setIsConfirmOpen(false);
        refetch();
      } else {
        toast.error("Order already updated or failed!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error!");
    }
  };

  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <img
          alt={name}
          src={image}
          className="mx-auto object-cover rounded h-10 w-15 border"
        />
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm font-medium">
        {name}
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
        {quantity}
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
        <span
          className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
            status?.toLowerCase() === "pending"
              ? "bg-yellow-100 text-yellow-700"
              : status?.toLowerCase() === "rejected"
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {status}
        </span>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm font-mono text-gray-500 text-center">
        {transactionId || "N/A"}
      </td>

      <td className="px-5 py-5 border-b bg-white text-sm">
        <Link
          to={`/dashboard/track-order/${_id}`}
          className="text-blue-600 font-semibold hover:underline"
        >
          Track Order
        </Link>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex items-center gap-2">
        <Link
          to={`/dashboard/order-details/${_id}`}
          className="px-3 py-1.5 font-semibold text-blue-900 bg-blue-50 border border-blue-200 rounded hover:bg-blue-600 hover:text-white transition"
        >
          View
        </Link>

        {status?.toLowerCase() === "pending" && (
          <button
            onClick={() => setIsConfirmOpen(true)}
            className="px-3 py-1.5 bg-red-50 text-red-600 border border-red-200 font-semibold rounded hover:bg-red-600 hover:text-white transition"
          >
            Cancel
          </button>
        )}

        {/* 🚨 CANCEL CONFIRMATION MODAL */}
        {isConfirmOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999]">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-[350px] text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                !
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Cancel Order?
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                Are you sure you want to cancel this order?
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handleCancelOrder}
                  className="flex-1 py-2.5 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600"
                >
                  Yes, Cancel
                </button>
                <button
                  onClick={() => setIsConfirmOpen(false)}
                  className="flex-1 py-2.5 bg-gray-100 text-gray-600 rounded-lg font-bold hover:bg-gray-200"
                >
                  No, Keep
                </button>
              </div>
            </div>
          </div>
        )}
      </td>
    </tr>
  );
};

export default CustomerOrderDataRow;
