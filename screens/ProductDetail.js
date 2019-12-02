import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { PRODUCTS } from '../mock/products';
import { INFOTAINTMENT } from '../mock/infotainment';
import { SAFETY } from '../mock/safety';
import { TRANSMISSION } from '../mock/transmission';
import { DIMENSIONS } from '../mock/dimensions';
import ProductDetailsCard from '../components/ProductDetailsCard';
import ProductImages from '../components/ProductImages';

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
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.header}>
              {this.selectedProduct.productName}
            </Text>
          </View>
          <View style={styles.image}>
            <ProductImages images={this.selectedProduct.images} />
          </View>
          <View style={styles.detailsContainer}>
            {
              Object.keys(this.specs).map((e, i) => (
                <ProductDetailsCard
                  key={i}
                  details={this.specs[e]}
                  headerTitle={this.headerTileMap[e]}
                />
              ))
            }
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  title: {
    alignItems: 'center'
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  image: {
  },
  detailsContainer: {
    overflow: 'scroll'
  },
  detail: {},
  label: {},
  text: {},
});

export default ProductDetail;
