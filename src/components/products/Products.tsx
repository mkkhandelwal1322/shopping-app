import React from "react";
import { useSelector } from "react-redux";
import Loading from "../loading/Loading";
import Product from "./Product";

type Props = {
  searchTerm: string;
};

const Products: React.FC<Props> = ({ searchTerm }) => {
  const productsList = useSelector((state: any) => state.productsList);
  const { loading, products } = productsList;
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="products-section">
            {products
              // eslint-disable-next-line array-callback-return
              .filter((product: Product) => {
                if (searchTerm === "") {
                  return product;
                } else if (
                  product.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return product;
                }
              })
              .map((product: Product) => {
                return <Product product={product} key={product.id} />;
              })}
          </div>
        </>
      )}
    </>
  );
};

export default Products;
