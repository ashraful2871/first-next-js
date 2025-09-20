import ProductsCard from "@/components/ProductsCard";
import React from "react";
import { IProduct } from "../../../../type";

const page = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: "force-cache",
  });
  const products = await res.json();
  return (
    <div>
      <h1 className="text-4xl text-center">All Product</h1>

      <div className="grid grid-cols-3 gap-5 w-[90%] mx-auto">
        {products.map((product: IProduct) => (
          <ProductsCard key={product.id} product={product}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default page;
