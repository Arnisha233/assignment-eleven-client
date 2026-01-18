// import React, { useState } from "react";
// import DeleteModal from "../../Modal/DeleteModal";
// import UpdateProductModal from "../../Modal/UpdateProductModal";

// const SellerOrderDataRow = ({ product, refetch }) => {
//   console.log(product);
//   const [isOpen, setIsOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);

//   const { image, name, price, payment } = product || {};

//   return (
//     <tr>
//       {/* Image */}
//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         <img
//           src={image}
//           alt="product"
//           className="h-10 w-10 object-cover rounded"
//         />
//       </td>

//       {/* Name */}
//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         <p className="text-gray-900">{name}</p>
//       </td>

//       {/* Price */}
//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         <p className="text-gray-900">${price}</p>
//       </td>

//       {/* Payment */}
//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         <p className="text-gray-900">{payment}</p>
//       </td>

//       {/* Actions */}
//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         <div className="flex gap-2">
//           {/* Delete */}
//           <button
//             onClick={() => setIsOpen(true)}
//             className="px-3 py-1 bg-red-100 text-red-700 rounded text-sm"
//           >
//             Delete
//           </button>

//           {/* Update */}
//           <button
//             onClick={() => setIsEditModalOpen(true)}
//             className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm"
//           >
//             Update
//           </button>
//         </div>

//         <DeleteModal
//           isOpen={isOpen}
//           closeModal={() => setIsOpen(false)}
//           product={product}
//           refetch={refetch}
//         />

//         <UpdateProductModal
//           isOpen={isEditModalOpen}
//           setIsEditModalOpen={setIsEditModalOpen}
//           product={product}
//           refetch={refetch}
//         />
//       </td>
//     </tr>
//   );
// };

// export default SellerOrderDataRow;

import React, { useState } from "react";
import DeleteModal from "../../Modal/DeleteModal";
import UpdateProductModal from "../../Modal/UpdateProductModal";
import toast from "react-hot-toast";

const SellerOrderDataRow = ({ product, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // ১. মাস্টার অ্যাডমিন চেক লজিক (AddProduct পেজের মতো)
  const isMasterAdmin = localStorage.getItem("isMasterAdmin") === "true";

  const { image, name, price, payment } = product || {};

  // ২. অ্যাকশন হ্যান্ডলার (নিরাপত্তার জন্য)
  const handleProtectedAction = (actionType) => {
    if (!isMasterAdmin) {
      return toast.error("READ-ONLY MODE: Action restricted!");
    }

    if (actionType === "delete") setIsOpen(true);
    if (actionType === "update") setIsEditModalOpen(true);
  };

  return (
    <tr>
      {/* Image */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <img
          src={image}
          alt="product"
          className="h-10 w-10 object-cover rounded"
        />
      </td>

      {/* Name */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{name}</p>
      </td>

      {/* Price */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">${price}</p>
      </td>

      {/* Payment */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{payment}</p>
      </td>

      {/* Actions */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex gap-2">
          {/* Delete Button */}
          <button
            onClick={() => handleProtectedAction("delete")}
            title={!isMasterAdmin ? "Locked for demo" : "Delete product"}
            className={`px-3 py-1 rounded text-sm transition-all ${
              isMasterAdmin
                ? "bg-red-100 text-red-700 hover:bg-red-200"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            Delete
          </button>

          {/* Update Button */}
          <button
            onClick={() => handleProtectedAction("update")}
            title={!isMasterAdmin ? "Locked for demo" : "Update product"}
            className={`px-3 py-1 rounded text-sm transition-all ${
              isMasterAdmin
                ? "bg-green-100 text-green-700 hover:bg-green-200"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            Update
          </button>
        </div>

        {/* Modals - এগুলা শুধু তখনি ওপেন হবে যদি ইভেন্ট হ্যান্ডলার পারমিশন দেয় */}
        <DeleteModal
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          product={product}
          refetch={refetch}
        />

        <UpdateProductModal
          isOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
          product={product}
          refetch={refetch}
        />
      </td>
    </tr>
  );
};

export default SellerOrderDataRow;
