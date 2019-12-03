import { ADD_ITEM, DELETE_ITEM } from "../actions/constants";

export default (cart = { items: [] }, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...cart,
        items: [...cart.items.filter(e => e.id !== action.payload.id), action.payload]
      }
    case DELETE_ITEM:
      return {
        ...cart,
        items: [...cart.items.filter(item => item.id !== action.payload.id)]
      }
    default:
      return cart;
  }
}