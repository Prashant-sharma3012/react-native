import React, { Component } from 'react'
import { Text, View } from 'react-native';
import IconSet from 'react-native-vector-icons/MaterialIcons';

export default class ManageProduct extends Component {

  static navigationOptions = (navigationData) => ({
    headerTitle: 'Manage',
    headerLeft: <IconSet 
    name="menu" 
    size={50} 
    onPress={() => navigationData.navigation.toggleDrawer()} />
  });

  render() {
    return (
      <View>
        <Text>
        ManageProduct
        </Text>
      </View>
    )
  }
}
