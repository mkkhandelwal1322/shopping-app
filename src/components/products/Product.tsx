import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/cart/cartActions";

type Props = {
  product: Product;
};

const Product: React.FC<Props> = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addToCart(product));
  };
  return (
    <>
      <div className="product-section">
        <div className="product-image">
          <img
            src={product.image}
            onClick={() => navigate(`/shop/${product.id}`)}
            alt=""
          />
        </div>
        <div className="product">
          <h1 className="product-name">{product.title}</h1>
          <h2 className="product-price">₹ {product.price}</h2>
          <p className="product-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            vel odit natus, quos doloremque voluptatem dolor.
          </p>
          <div className="buttons">
            <button className="add-btn" onClick={addToCartHandler}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
