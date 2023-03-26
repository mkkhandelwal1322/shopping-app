import { combineReducers } from "redux";
import { productListReducer } from "../product/productReducer";
import { cartReducer } from "../cart/cartReducer";

const rootReducer = combineReducers({
  productsList: productListReducer,
  cart: cartReducer,
});

export default rootReducer;
