import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { addToCart } from "../../redux/cart/cartActions";
import { Button, Heading, Description } from "../../styles/Style";
import Loading from "../loading/Loading";
import "./Product.css";

const ProductHeading = styled(Heading)`
  margin-left: 0;
`;
const ProductButton = styled(Button)`
  margin-left: 0;
  margin-right: 35px;
`;

const ProductDisplay = () => {
  const { id } = useParams();
  const productsList = useSelector((state: any) => state.productsList);
  const dispatch = useDispatch();
  const { loading, products } = productsList;
  const productToDisplay: Product = products.find((product: Product) => {
    // eslint-disable-next-line eqeqeq
    return product.id == id;
  });
  const addToCartFromProductPage = (product: Product) => {
    dispatch(addToCart(product));
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="product-display-section">
            <div className="product-display-img">
              <img src={productToDisplay.image} alt="" />
            </div>
            <div className="product-display-content">
              <ProductHeading>{productToDisplay.title}</ProductHeading>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, id in asperiores dolorum velit dignissimos error ex
                voluptatibus, quas blanditiis, illo nam nemo fugiat beatae
                facilis explicabo et voluptatem vitae.
              </Description>
              <h3 className="product-display-price">
              ₹ {productToDisplay.price}
              </h3>
              <div className="product-display-buttons">
                <ProductButton
                  onClick={() => addToCartFromProductPage(productToDisplay)}
                >
                  Add to Cart
                </ProductButton>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDisplay;
