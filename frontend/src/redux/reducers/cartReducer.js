import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cartConstants";

const CART_INITIALE_STATE = {
  cartItems: [],
};

export const cartReducer = (state = CART_INITIALE_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;

      const exisItem = state.cartItems.find((x) => x.product === item.product);

      if (exisItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === exisItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
};
