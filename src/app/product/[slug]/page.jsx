"use client";

import { AppContext } from "@/app/components/Context";
import NotFoundProduct from "@/app/components/NotFoundProduct";
import ProductDetail from "@/app/components/ProductDetail";
const { use, useContext } = require("react");

const ProductSlug = ({ params }) => {
  const { products } = useContext(AppContext);
  const { slug } = use(params);
  const product = products.find((item) => item.slug === slug);
  console.log(product);
  return (
    <div>
      {product ? (
        <div>
          <ProductDetail product={product} />
        </div>
      ) : (
        <div>
          
          <NotFoundProduct />
        </div>
      )}
    </div>
  );
};

export default ProductSlug;
