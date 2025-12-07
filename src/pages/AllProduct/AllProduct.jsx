import React from "react";
import Container from "../../components/Shared/Container";
import ProductCard from "../../components/Card/ProductCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
const AllProduct = () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["all-product"],
    queryFn: async () => {
      const result = await axios(`${import.meta.env.VITE_API_URL}/all-product`);
      return result.data;
    },
  });
  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <Container>
        {products && products.length > 0 ? (
          <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : null}
      </Container>
    </div>
  );
};

export default AllProduct;
