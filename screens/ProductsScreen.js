import React, { Component } from 'react'
import { Text, View, FlatList, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProductCard from '../components/ProductCard';
import { connect } from "react-redux";
import { addToCart } from "../actions/cart.action";

class ProductsScreen extends Component {

  static navigationOptions = (navigationData) => ({
    headerTitle: 'Products',
    headerLeft: <Icon
      name="menu"
      size={40}
      onPress={() => navigationData.navigation.toggleDrawer()} />,
    headerRight: <Icon
      name="shopping-cart"
      size={40}
      onPress={() => navigationData.navigation.navigate("Cart")} />
  });

  renderProducts = (productData) => (
    <ProductCard
      product={productData.item}
      onSelect={() => this.props.navigation.navigate({
        routeName: 'ProductDetail', params: { prodId: productData.item.id, prodCategory: productData.item.category }
      })}
      buyProduct={() => this.props.addToCart(productData.item)}
    />
  );


  render() {
    return (
      <FlatList
        keyExtractor={item => item.id.toString()} // key extractor needs string as type
        numColumns={1}
        data={this.props.products}
        renderItem={this.renderProducts} />
    )
  }
}


const mapStateToProps = ({ products }) => ({
  products: products.products
})

export default connect(mapStateToProps, { addToCart })(ProductsScreen);