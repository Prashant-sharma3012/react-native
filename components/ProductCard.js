import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Button } from 'react-native';
import Colors from '../constants/color';

function ProductCard(props) {

  const defaultImage = "https://drop.ndtv.com/albums/AUTO/porsche-taycan-turbo/1200x900_1.jpg";

  handleCartSelect = () => this.props.addToCart(this.props.product);

  return (
    <View>
      <TouchableOpacity onPress={props.onSelect}>
        <View style={styles.container}>
          <View style={styles.productImage}>
            <ImageBackground style={styles.bgImage} source={{ uri: props.product.imagUrl || defaultImage }}>
              <Text style={styles.imageTitle}>{props.product.category}</Text>
            </ImageBackground>

          </View>
          <View style={styles.productDetails}>
            <Text style={styles.productDetailsText}>Model: {props.product.model}</Text>
            <Text style={styles.productDetailsText}>Price: {props.product.price}K</Text>
            <Text style={styles.productDetailsText}>Discount: {props.product.discount}%</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.addToCart}>
        <Button onPress={props.buyProduct} color={Colors.primaryColor} title={"buy"} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    margin: 15,
    borderColor: Colors.productBorderColor,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: "hidden"
  },
  productImage: {
    height: 200,
    overflow: "hidden"
  },
  productName: {

  },
  productDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.primaryColor,
    padding: 5,
  },
  productDetailsText: {
    color: Colors.tint,
    padding: 2,
    fontWeight: "bold"
  },
  bgImage: {
    width: "100%",
    height: "100%"
  },
  imageTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.tint,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: 'center'
  },
  addToCart: {
    width: 50,
    height: 50,
    position: "absolute",
    right: 30,
    top: 30
  }
});


export default ProductCard;