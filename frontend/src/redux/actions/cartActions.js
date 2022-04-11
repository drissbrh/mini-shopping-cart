import axios from "axios";
import * as actionTypes from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/sneakers/${id}`);
  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      image: data.media,
      price: data.retailPrice,
      qty,
    },
  });
  localStorage.setItem("myCart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });
  localStorage.setItem("myCart", JSON.stringify(getState().cart.cartItems));
};
