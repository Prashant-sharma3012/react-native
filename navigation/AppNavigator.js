// stack - (ProductsScreen, ProductDetailScreen, cartscreen)
// drawer - (orderscree, manageproductscreen, ProductsScreen(stack nav))
// stack - (ManageProducts, AddProducts)
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';import ManageProductNavigator  from './ManageProduct';
import ProductsNavigator from './Products';
import OrdersScreen from '../screens/OrdersScreen';

const appDrawer = createDrawerNavigator({
  ManageProducts: ManageProductNavigator,
  ProductsOverview: ProductsNavigator,
  orders: OrdersScreen
});

export default createAppContainer(appDrawer);