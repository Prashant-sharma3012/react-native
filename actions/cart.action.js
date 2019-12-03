import { ADD_ITEM, DELETE_ITEM } from "./constants";

export const addToCart = (item) => {
  return {
    type: ADD_ITEM,
    payload: item
  }
}

export const removeFromCart = (item) => {
  return {
    type: DELETE_ITEM,
    payload: item
  }
}