// stack - (ManageProducts, AddProducts)
import {createStackNavigator} from 'react-navigation-stack';
import OrdersScreen from '../screens/OrdersScreen';
import Colors from '../constants/color';

const OrdersNavigator = createStackNavigator({
  Orders: OrdersScreen,
},{
  mode: 'modal',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Colors.primaryColor
    },
    headerTintColor: Colors.tint
  }
});

export default OrdersNavigator;