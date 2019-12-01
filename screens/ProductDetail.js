import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { PRODUCTS } from '../mock/products';
import { INFOTAINTMENT } from '../mock/infotainment';
import { SAFETY } from '../mock/safety';
import { TRANSMISSION } from '../mock/transmission';
import { DIMENSIONS } from '../mock/dimensions';
import ProductDetailsCard from '../components/ProductDetailsCard';
import { FlatList } from 'react-native-gesture-handler';

class ProductDetail extends Component {

  static navigationOptions = (navigationData) => {
    let prodId = navigationData.navigation.getParam('prodId');
    let selectedProduct = PRODUCTS.find(product => product.id === prodId);

    return {
      headerTitle: selectedProduct.category
    }
  }

  renderSpecs = (data) =>
    <ProductDetailsCard 
      details={this.specs[data.item]}
      headerTitle={this.headerTileMap[data.item]}
    />;

  prodId = this.props.navigation.getParam('prodId');
  selectedProduct = PRODUCTS.find(product => product.id === this.prodId);

  specs = {
    inf: INFOTAINTMENT.find(e => e.id === this.prodId),
    safety: SAFETY.find(e => e.id === this.prodId),
    transmission: TRANSMISSION.find(e => e.id === this.prodId),
    dimension: DIMENSIONS.find(e => e.id === this.prodId)
  }

  headerTileMap = {
    inf: 'Infotainment',
    safety: 'Safety',
    dimension: 'Dimensions',
    transmission: 'Transmission',
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text>
            {this.selectedProduct.productName}
          </Text>
        </View>
        <View style={styles.image}>
        </View>
        <View style={styles.detailsContainer}>
        <FlatList
          keyExtractor={item => item} // key extractor needs string as type
          numColumns={1}
          data={Object.keys(this.specs)}
          renderItem={this.renderSpecs} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {},
  title: {},
  image: {},
  detailsContainer: {},
  detail: {},
  label: {},
  text: {},
});

export default ProductDetail;
