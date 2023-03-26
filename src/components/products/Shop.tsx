import React from "react";
import "./Product.css";
import Products from "./Products";
import { Heading } from "../../styles/Style";

const Shop = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  return (
    <>
      <div className="shop-header">
        <Heading className="shop-heading">Shop</Heading>
        <div className="shop-search">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(event.target.value)
            }
          />
          <i className="fa fa-magnifying-glass shop-search-btn"></i>
        </div>
      </div>
      <Products searchTerm={searchTerm} />
    </>
  );
};

export default Shop;
