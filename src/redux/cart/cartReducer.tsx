import {
  ADD_TO_CART,
  DECREMENT,
  INCREMENT,
  REMOVE_ITEM
} from "./cartTypes";

const initialState: CartState = {
  cart: [],
};

export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      let cartData = []
      const itemExist = state.cart.some(
        (item: any) => item.id === action.payload.id
      );
      if (!itemExist) {
        cartData.push(action.payload)
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      } else {
        return {
          ...state,
          cart: state.cart.map((item: any) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            } else {
              return item;
            }
          }),
        };
      }
    case REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item: any) => item.id !== action.payload),
      };
    case INCREMENT:
      return {
        ...state,
        cart: state.cart.map((item: any) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        }),
      };
    case DECREMENT:
      return {
        ...state,
        cart: state.cart
          .map((item: any) => {
            if (item.id === action.payload) {
              return {
                ...item,
                quantity: item.quantity - 1,
              };
            } else {
              return item;
            }
          })
          .filter((item) => item.quantity !== 0),
      };
    default:
      return state;
  }
};

// import {
//   ADD_CART_ITEM_REQUEST,
//   ADD_CART_ITEM_SUCCESS,
//   ADD_CART_ITEM_FAIL,
//   EMPTY_CART,
//   FETCH_CART_ITEMS_REQUEST,
//   FETCH_CART_ITEMS_SUCCESS,
//   FETCH_CART_ITEMS_FAIL,
//   REMOVE_CART_ITEM_REQUEST,
//   REMOVE_CART_ITEM_SUCCESS,
//   REMOVE_CART_ITEM_FAIL,
// } from "./cartTypes";
// const initialState: CartState = {
//   loading: false,
//   cart: [],
//   error: "",
//   cartTotal: 0,
// };
// export const cartReducer = (state = initialState, action: any): CartState => {
//   switch (action.type) {
//     case ADD_CART_ITEM_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case ADD_CART_ITEM_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         cart: [...state.cart, action.payload],
//       };
//     case ADD_CART_ITEM_FAIL:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     case REMOVE_CART_ITEM_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case REMOVE_CART_ITEM_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//       };
//     case REMOVE_CART_ITEM_FAIL:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     case FETCH_CART_ITEMS_REQUEST:
//       return {
//         ...state,
//         cart: [],
//         loading: true,
//       };
//     case FETCH_CART_ITEMS_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         cart: action.payload,
//       };
//     case FETCH_CART_ITEMS_FAIL:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     case EMPTY_CART:
//       return {
//         ...state,
//         loading: false,
//         cart: [],
//       };
//     default:
//       return state;
//   }
// };

// import {
//   ADD,
//   ADD_TO_CART,
//   FETCH_CART_ITEMS,
//   FETCH_CART_ITEMS_FAIL,
//   FETCH_CART_ITEMS_REQUEST,
//   REMOVE_FROM_CART,
//   SUB,
// } from "./cartTypes";

// const initialState: CartState = {
//   loading: false,
//   cart: [],
//   error: "",
//   cartTotal: 0,
//   item: [],
// };
// export const cartReducer = (state = initialState, action: any): CartState => {
//   let foundIndex = 0;
//   let foundIndexCart = 0;
//   let { item, cart, cartTotal } = state;
//   switch (action.type) {
//     case FETCH_CART_ITEMS_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: null,
//       };
//     case FETCH_CART_ITEMS:
//       return {
//         ...state,
//         loading: false,
//         item: action.item,
//       };
//     case FETCH_CART_ITEMS_FAIL:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload.error,
//         item: [],
//       };
//     case ADD_TO_CART:
//       foundIndex = item.findIndex(
//         (item: any) => item.id === action.itemToBeAdded
//       );
//       item[foundIndex]["cartCount"] = 1;
//       cart.push(item[foundIndex]);
//       cartTotal = cartTotal + item[foundIndex]["price"];
//       return {
//         ...state,
//         item,
//         cart,
//         cartTotal,
//       };
//     case ADD:
//       foundIndex = item.findIndex((item: any) => item.id === action.itemInc);
//       item[foundIndex]["cartCount"] = item[foundIndex]["cartCount"] + 1;
//       foundIndexCart = cart.findIndex(
//         (item: any) => item.id === action.itemInc
//       );
//       cart[foundIndexCart]["cartCount"] = item[foundIndex]["cartCount"];
//       cartTotal = cartTotal + item[foundIndex]["price"];
//       return {
//         ...state,
//         item,
//         cart,
//         cartTotal,
//       };
//     case SUB:
//       foundIndex = item.findIndex((item: any) => item.id === action.itemDec);
//       item[foundIndex]["cartCount"] = item[foundIndex]["cartCount"] - 1;
//       if (item[foundIndex]["cartCount"] === 0) {
//         cart = cart.filter(function (obj) {
//           return obj.id !== item[foundIndex].id;
//         });
//         delete item[foundIndex]["cartCount"];
//       } else {
//         foundIndexCart = cart.findIndex(
//           (item: any) => item.id === action.itemDec
//         );
//         cart[foundIndexCart]["cartCount"] = item[foundIndex]["cartCount"];
//       }
//       cartTotal = cartTotal - item[foundIndex]["price"];
//       return {
//         ...state,
//         item,
//         cart,
//         cartTotal,
//       };
//     case REMOVE_FROM_CART:
//       foundIndex = item.findIndex(
//         (item: any) => item.id === action.itemToRemove
//       );
//       cart = cart.filter(function (obj) {
//         return obj.id !== item[foundIndex].id;
//       });
//       delete item[foundIndex]["cartCount"];
//       cartTotal = cartTotal - action.amount;
//       return {
//         ...state,
//         item,
//         cart,
//         cartTotal,
//       };
//     default:
//       return state;
//   }
// };
