import axios from "axios";
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
} from "./productTypes";

export const productList = () => async (dispatch: any) => {
  try {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });
    axios
      .get("https://fakestoreapi.com/products")
      .then(function (response) {
        const result = response.data.map((data: any) => {
          return {
            ...data,
            quantity: 1
          }
        })
        dispatch({
          type: PRODUCT_LIST_SUCCESS,
          payload: result,
        });
      })
      .catch(function (error) {
        dispatch({
          type: PRODUCT_LIST_FAIL,
          payload: error.message,
        });
      });
  } catch (error: any) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.message,
    });
  }
};
