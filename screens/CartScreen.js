import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { connect } from "react-redux";
import { removeFromCart } from "../actions/cart.action";

class CartScreen extends Component {

  static navigationOptions = (navigationData) => {
    return {
      headerTitle: "Cart"
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.items.length === 0
          ? <Text style={styles.emptyMessage}> No Items Added to cart</Text>
          : this.props.items.map((item, index) => (
            <View style={styles.item} key={index}>
              <View style={styles.itemDetailContainer}>
                <Text style={styles.itemDetails}>Model: {item.productName}</Text>
                <Text style={styles.itemDetails}>Price: {item.price}K</Text>
                <Text style={styles.itemDetails}>Discount: {item.discount}%</Text>
              </View>
              <View style={styles.removeButtonContainer}>
                <Button title="Remove" onPress={() => this.props.removeFromCart(item)} />
              </View>
            </View>
          ))
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
    shadowColor: "black",
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10
  },
  emptyMessage: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center"
  },
  itemDetails: {
    fontSize: 15,
    fontWeight: "bold",
  },
  itemDetailContainer: {
    display: "flex",
  },
  removeButtonContainer: {

  }
})

const mapStateToProps = ({ cart }) => ({
  items: cart.items
})

export default connect(mapStateToProps, { removeFromCart })(CartScreen);