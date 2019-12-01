import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRODUCTS } from '../mock/products';
import ProductCard from '../components/ProductCard';

export default class ProductsScreen extends Component {

  static navigationOptions = (navigationData) => ({
    headerTitle: 'Products',
    headerLeft: <Icon
      name="menu"
      size={40}
      onPress={() => navigationData.navigation.toggleDrawer()} />
  });

  renderProducts = (productData) => (
    <ProductCard
      product={productData.item}
      onSelect={() => this.props.navigation.navigate({
        routeName: 'ProductDetail', params: { prodId: productData.item.id }
      })}
    />
  );


  render() {
    return (
      <FlatList
        keyExtractor={item => item.id.toString()} // key extractor needs string as type
        numColumns={1}
        data={PRODUCTS}
        renderItem={this.renderProducts} />
    )
  }
}
