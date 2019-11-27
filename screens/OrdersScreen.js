import React, { Component } from 'react'
import { Text, View } from 'react-native';
import IconSet from 'react-native-vector-icons/MaterialIcons';

export default class OrdersScreen extends Component {

  static navigationOptions = (navigationData) => ({
    headerTitle: 'Orders',
    headerLeft: <IconSet 
    name="menu" 
    size={50} 
    onPress={() => navigationData.navigation.toggleDrawer()} />
  });


  render() {
    return (
      <View>
        <Text>
        Orders
        </Text>
      </View>
    )
  }
}
