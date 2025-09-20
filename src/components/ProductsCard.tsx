import React from "react";
import { IProduct } from "../../type";
import Image from "next/image";

const ProductsCard = ({ product }: { product: IProduct }) => {
  return (
    <div className="border bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Image
        src={product.image}
        alt={product.product_name}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {product.product_name}
        </h3>
        <p className="text-sm text-gray-500">{product.brand}</p>
        <p className="text-sm text-gray-500">{product.category}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-xl font-bold text-indigo-600">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            Buy Now
          </button>
          <button className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
