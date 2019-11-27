// stack - (ProductsScreen, ProductDetailScreen, cartscreen)
// drawer - (orderscree, manageproductscreen, ProductsScreen(stack nav))
// stack - (ManageProducts, AddProducts)
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';import ManageProductNavigator  from './ManageProduct';
import ProductsNavigator from './Products';
import OrdersNavigator from './Orders';

const appDrawer = createDrawerNavigator({
  ManageProducts: ManageProductNavigator,
  ProductsOverview: ProductsNavigator,
  orders: OrdersNavigator
});

export default createAppContainer(appDrawer);