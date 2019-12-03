import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window')

class ProductImageCarousel extends Component {

  _renderItem({ item, index }, parallaxProps) {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 60}
          data={this.props.images}
          renderItem={this._renderItem}
          hasParallaxImages={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop: 10,
    marginBottom: 10
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'black',
    borderRadius: 8
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
})

export default ProductImageCarousel;