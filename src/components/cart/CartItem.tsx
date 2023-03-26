import { useDispatch } from "react-redux";
import styled from "styled-components";
import { decrItem, incrItem } from "../../redux/cart/cartActions";
import { Heading, Description, Button } from "../../styles/Style";

type Props = {
  cartItem: Product;
};

const CartItemHeading = styled(Heading)`
  margin-left: 0;
  margin-top: 35px;
  line-height: 30px !important;
`;
const CartButton = styled(Button)`
  font-size: 16px;
  padding: 12px 27px;
`;
const QuantityDiv = styled.div`
  height: 25px;
  width: 25px;
  margin-top: 10px;
  margin-right: -10px;
  font-size: 16px;
`;

const CartItem: React.FC<Props> = ({ cartItem }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="cart-item-section">
        <img className="cart-img" src={cartItem.image} alt="" />
        <div className="cart-about">
          <CartItemHeading className="cart-title">
            {cartItem.title}
          </CartItemHeading>
          <Description className="cart-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
            sequi impedit voluptatibus officia odio dolore. Cum natus architecto
            totam eligendi!
          </Description>
        </div>
        <div className="cart-prices">
          <div className="cart-amount">₹ {cartItem.price}</div>
          <div className="button-box">
            <CartButton onClick={() => dispatch(incrItem(cartItem.id))}>
              +
            </CartButton>
            <QuantityDiv>
              {cartItem.quantity === undefined ? 0 : cartItem.quantity}
            </QuantityDiv>
            <CartButton onClick={() => dispatch(decrItem(cartItem.id))}>
              -
            </CartButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
