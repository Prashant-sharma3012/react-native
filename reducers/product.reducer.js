import { ADD_PRODUCT, DELETE_PRODUCT } from "../actions/constants";
import { PRODUCTS } from "../mock/products";
import { INFOTAINTMENT } from '../mock/infotainment';
import { SAFETY } from '../mock/safety';
import { TRANSMISSION } from '../mock/transmission';
import { DIMENSIONS } from '../mock/dimensions';


export default (productsDetail = {
  products: PRODUCTS,
  dimensions: DIMENSIONS,
  inf: INFOTAINTMENT,
  transmission: TRANSMISSION,
  safety: SAFETY
},
  action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...productsDetail,
        products: [...productsDetail.products, action.payload]
      }
    case DELETE_PRODUCT:
      return {
        ...productsDetail,
        products: [...productsDetail.products.filter(product => product.id !== action.payload.id)]
      }
    default:
      return productsDetail;
  }
}