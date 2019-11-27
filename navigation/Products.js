// stack - (ProductsScreen, ProductDetailScreen, cartscreen)
import { createStackNavigator } from 'react-navigation-stack';
import ProductsScreen from '../screens/ProductsScreen';
import CartScreen  from '../screens/CartScreen';
import ProductDetail from '../screens/ProductDetail';
import Colors from '../constants/color';

const ProductsNavigator = createStackNavigator({
  ProductsOverview: ProductsScreen,
  ProductDetail: ProductDetail,
  Cart: CartScreen
},{
  mode: 'modal',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Colors.primaryColor
    },
    headerTintColor: Colors.tint
  }
});

export default ProductsNavigator;