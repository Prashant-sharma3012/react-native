import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from "react-redux";
import { removeFromCart } from "../actions/cart.action";

class CartScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        {
          this.props.items.map((item, index) => (
            <View style={styles.item} key={index}>
              <Text>{item.productName}</Text>
              <Text>{item.price}</Text>
              <Text>{item.discount}</Text>
            </View>
          ))
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    display: "flex",
    justifyContent: "center",
  },
  item:{
    alignItems: "center",
    margin: 30
  }
})

const mapStateToProps = ({ cart }) => ({
  items: cart.items
})

export default connect(mapStateToProps, { removeFromCart })(CartScreen);