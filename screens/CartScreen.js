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
              <Text>{item.productName}</Text>
              <Text>{item.price}</Text>
              <Text>{item.discount}</Text>
              <Button title="Remove" onPress={() => this.props.removeFromCart(item)}/>
            </View>
          ))
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  },
  item: {
    alignItems: "center",
    margin: 30
  },
  emptyMessage: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf:"center"
  }
})

const mapStateToProps = ({ cart }) => ({
  items: cart.items
})

export default connect(mapStateToProps, { removeFromCart })(CartScreen);