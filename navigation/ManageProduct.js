// stack - (ManageProducts, AddProducts)
import {createStackNavigator} from 'react-navigation-stack';
import ManageProduct from '../screens/ManageProduct';
import AddProduct from '../screens/AddProduct';
import Colors from '../constants/color';

const ManageProductsNavigator = createStackNavigator({
  ManageProducts: ManageProduct,
  AddProduct: AddProduct
},{
  initialRouteName: 'ManageProducts',
  mode: 'modal',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Colors.primaryColor
    },
    headerTintColor: Colors.tint
  }
});

export default ManageProductsNavigator;