import React, { Component } from 'react'
import { Animated, View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
const deviceWidth = Dimensions.get('window').width

class ProductImages extends Component {

  state = {
    atPos: 0
  }

  handleScroll = (event) => {
    let scrollAmount = Math.floor(deviceWidth);
    let scrolledX = Math.floor(event.nativeEvent.contentOffset.x);

    let atPos = Math.floor(scrolledX / scrollAmount);

    this.setState({ atPos });
  }

  indicatorColor = (index) => (index === this.state.atPos ? '#5294d6' : 'black');

  scrollToPos = (index) => this.scrollViewRef.scrollTo({ x: index * deviceWidth });

  render() {
    return (
      <View style={styles.imageContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={10}
          onScroll={this.handleScroll}
          ref={(ref) => { this.scrollViewRef = ref; }}
        >
          {
            this.props.images.map((uri, i) => (
              <Image
                key={i}
                style={styles.image}
                source={{ uri }}
              />
            ))
          }
        </ScrollView>
        {/* The dots that tell users about number of images */}
        <View style={styles.markerContainer}>
          {
            this.props.images.map((uri, i) => (
              <TouchableOpacity onPress={() => this.scrollToPos(i)} key={i}>
                <View
                  style={[styles.markers, { backgroundColor: this.indicatorColor(i) }]}
                />
              </TouchableOpacity>
            ))
          }
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  imageContainer: {
    display: 'flex',
    justifyContent: "center"
  },
  image: {
    width: deviceWidth,
    height: 300
  },
  markerContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    marginTop: 10
  },
  markers: {
    margin: 4,
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center'
  }
})

export default ProductImages;