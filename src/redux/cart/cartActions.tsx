// import {
//   ADD_CART_ITEM_REQUEST,
//   ADD_CART_ITEM_SUCCESS,
//   ADD_CART_ITEM_FAIL,
//   FETCH_CART_ITEMS_REQUEST,
//   FETCH_CART_ITEMS_SUCCESS,
//   FETCH_CART_ITEMS_FAIL,
//   REMOVE_CART_ITEM_REQUEST,
//   REMOVE_CART_ITEM_FAIL,
//   REMOVE_CART_ITEM_SUCCESS,
// } from "./cartTypes";

// export const deleteFromCart = (cartItem: any) => async (dispatch: any) => {
//   try {
//     dispatch({ type: REMOVE_CART_ITEM_REQUEST });
//     // const cartRef = collection(db, "cart");
//     // const deleteDocRef = doc(cartRef, cartItem.docId);
//     // await deleteDoc(deleteDocRef);
//     dispatch({ type: REMOVE_CART_ITEM_SUCCESS });
//     dispatch(fetchCartItems());
//   } catch (error: any) {
//     dispatch({ tyep: REMOVE_CART_ITEM_FAIL, payload: error.message });
//   }
// };
// export const fetchCartItems = () => async (dispatch: any) => {
//   try {
//     dispatch({ type: FETCH_CART_ITEMS_REQUEST });
//     let cartData: any = [];
//     // const { user } = store.getState();
//     // const userId = user.currentUser.uid;
//     // const cartRef = collection(db, "cart");
//     // const docs = await getDocs(cartRef);
//     // docs.forEach((doc) => {
//     //   if (doc.data().userId === userId) {
//     //     const cart = {
//     //       docId: doc.id,
//     //       ...doc.data(),
//     //     };
//     //     cartData.push(cart);
//     //   }
//     // });
//     dispatch({ type: FETCH_CART_ITEMS_SUCCESS, payload: cartData });
//   } catch (error: any) {
//     dispatch({ type: FETCH_CART_ITEMS_FAIL, payload: error.message });
//   }
// };
// export const addToCart = (cartItem: Product) => async (dispatch: any) => {
//   try {
//     dispatch({ type: ADD_CART_ITEM_REQUEST });
//     const cartData: any = [];
//     dispatch({ type: ADD_CART_ITEM_SUCCESS, payload: cartData });
//     dispatch(fetchCartItems());
//   } catch (error: any) {
//     dispatch({ tyep: ADD_CART_ITEM_FAIL, payload: error.message });
//   }
// };

import {
  ADD_TO_CART,
  DECREMENT,
  INCREMENT,
  REMOVE_ITEM
} from "./cartTypes";


export const addToCart = (item: any) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const removeItem = (id: any) => {
  return {
    type: REMOVE_ITEM,
    payload: id,
  };
};

export const incrItem = (id: any) => {
  return {
    type: INCREMENT,
    payload: id,
  };
};

export const decrItem = (id: any) => {
  return {
    type: DECREMENT,
    payload: id,
  };
};
