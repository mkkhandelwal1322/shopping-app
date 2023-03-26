import styled from "styled-components";
import "./Cart.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Heading } from "../../styles/Style";

const SubtotalHeading = styled(Heading)`
  margin-left: 0;
  margin-bottom: 15px;
  font-size: 24px;
`;
const CheckoutButton = styled(Button)`
  width: 100%;
  font-size: 18px;
  display: inline-block;
  padding: 12px 55px;
  margin-bottom: 10px;
  margin-left: 0;
  margin-top: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const NoItemsInCart = styled.div`
  font-size: 22px;
  margin-left: 25px;

`;

const ShopButton = styled(Button)`
width: 150px;
padding: 10px 20px;
margin-top: 10px;
`

const Cart = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((state: any) => state.cart);
  const cartTotal = cart
    .map((item: { price: number; quantity: number }) => {
      return item.price * item.quantity;
    })
    .reduce((preVal: any, curVal: any) => {
      return preVal + curVal;
    }, 0);

  return (
    <>
      <Heading>Your Bag</Heading>
      {!cart.length && (
        <Wrapper>
          <NoItemsInCart>No items in Cart</NoItemsInCart>
          <ShopButton onClick={() => navigate("/shop")}>Shop</ShopButton>
        </Wrapper>
      )}
      {cart &&
        cart.map((item: Product) => <CartItem cartItem={item} key={item.id} />)}
      {cart.length > 0 && (
        <>
          <hr />
          <div className="cart-checkout-section">
            <div className="cart-total">
              <SubtotalHeading>Sub-Total</SubtotalHeading>
              <SubtotalHeading>₹ {cartTotal.toLocaleString()}</SubtotalHeading>
            </div>
            <CheckoutButton
              onClick={() => navigate("/checkout")}
              disabled={!cartTotal}
            >
              Checkout
            </CheckoutButton>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
