import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import ProductDetailsCard from '../components/ProductDetailsCard';
import ProductImages from '../components/ProductImages';
import ProductImageCarousel from "../components/ProductImageCarousel";
import { connect } from 'react-redux';

class ProductDetail extends Component {

  static navigationOptions = (navigationData) => {
    let prodCat = navigationData.navigation.getParam('prodCategory');

    return {
      headerTitle: prodCat
    }
  }

  renderSpecs = (data) =>
    <ProductDetailsCard
      details={this.specs[data.item]}
      headerTitle={this.headerTileMap[data.item]}
    />;

  prodId = this.props.navigation.getParam('prodId');
  selectedProduct = this.props.products.find(product => product.id === this.prodId);

  specs = {
    inf: this.props.inf.find(e => e.id === this.prodId),
    safety: this.props.safety.find(e => e.id === this.prodId),
    transmission: this.props.transmission.find(e => e.id === this.prodId),
    dimension: this.props.dimensions.find(e => e.id === this.prodId)
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
            {/* <ProductImages images={this.selectedProduct.images} /> */}
            <ProductImageCarousel images={this.selectedProduct.images} />
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

const mapStateToProps = ({ products }) => ({
  products: products.products,
  dimensions: products.dimensions,
  inf: products.inf,
  transmission: products.transmission,
  safety: products.safety,
})

export default connect(mapStateToProps,{})(ProductDetail);