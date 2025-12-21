import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router";
import Container from "../../components/Shared/Container";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import PurchaseModal from "../../components/Modal/PurchaseModal";
import Button from "../../components/Button/Button";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const ProductDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  /* ------------------ Product Fetch ------------------ */
  const { data: product = {}, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await axios(
        `${import.meta.env.VITE_API_URL}/all-product/${id}`
      );
      return res.data;
    },
  });

  /* ------------------ User Role Fetch ------------------ */
  const { data: roleData = {}, isLoading: roleLoading } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axios(
        `${import.meta.env.VITE_API_URL}/user/role/${user.email}`
      );
      return res.data;
    },
  });

  const role = roleData?.role;

  if (isLoading || roleLoading) return <LoadingSpinner />;

  const {
    image,
    name,
    description,
    category,
    price,
    quantity,
    moq,
    payment,
    seller,
  } = product;

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOrder = () => {
    if (payment === "Cash on Delivery") {
      toast.success("Order completed");
    } else {
      setIsOpen(true);
    }
  };

  return (
    <Container>
      <div className="mx-auto flex flex-col lg:flex-row justify-between w-full gap-12 my-10 items-center">
        {/* -------- Left Side (Image) -------- */}
        <div className="flex-1">
          <div className="overflow-hidden rounded-xl w-[450px] h-[450px] object-cover">
            <img
              className="object-cover w-full h-full transition duration-300"
              referrerPolicy="no-referrer"
              src={image}
              alt="Product"
            />
          </div>
        </div>

        {/* -------- Right Side (Info) -------- */}
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
          <p className="text-gray-500">Category: {category}</p>

          <p className="text-neutral-500">{description}</p>

          <div className="text-neutral-600 space-y-1">
            <p>Available Quantity: {quantity} Units</p>
            <p>Minimum Order Quantity: {moq} Units</p>
            <p>Payment Option: {payment}</p>
          </div>

          <div className="flex items-center gap-3">
            <p className="font-semibold">Seller: {seller?.name}</p>
            <img
              className="w-8 h-8 rounded-full"
              src={seller?.image}
              alt="Seller"
              referrerPolicy="no-referrer"
            />
          </div>

          <h2 className="text-3xl font-bold text-gray-700">Price: ${price}</h2>

          {/* -------- Order Button (Role Based) -------- */}
          {user && role !== "admin" && role !== "seller" ? (
            <Button label="Order" onClick={handleOrder} />
          ) : (
            <p className="text-red-500 text-sm font-medium">
              Login as customer to place order.
            </p>
          )}

          {/* -------- Purchase Modal -------- */}
          {user && role !== "admin" && role !== "seller" && (
            <PurchaseModal
              product={product}
              isOpen={isOpen}
              closeModal={closeModal}
            />
          )}
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
