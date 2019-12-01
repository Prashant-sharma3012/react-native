import React, { Component } from 'react';
import { View, Text, TouchableOpacity, LayoutAnimation, StyleSheet } from 'react-native';
import Colors from '../constants/color';

export default class ProductDetailsCard extends Component {

  state = {
    height: 0,
    opacity: 0,
    borderWidth: 0,
    expanded: false
  }

  toggle = () => {
    LayoutAnimation.spring();
    this.setState({
      opacity: this.state.expanded ? 0 : 100,
      height: this.state.expanded
        ? 0
        : 260,
      borderWidth: this.state.expanded ? 0 : 3,
      expanded: !this.state.expanded
    });
  }

  renderDetailLines = () => Object.keys(this.props.details)
    .filter(e => e !== 'id')
    .map((e, i) => (
      <View key={i} style={styles.detailLine}>
        <Text style={styles.detailLineHeading}>{e} :</Text>
        <Text style={styles.detailLineValue}>
          {typeof this.props.details[e] === "boolean"
            ? (this.props.details[e] ? 'Yes' : 'No')
            : this.props.details[e]}
        </Text>
      </View>
    ));

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.toggle}>
          <View style={styles.header}>
            <Text style={styles.title}>{this.props.headerTitle}</Text>
          </View>
        </TouchableOpacity>
        <View style={
          [styles.body, {
            height: this.state.height,
            borderWidth: this.state.borderWidth,
            opacity: this.state.opacity
          }]
        }>
          {this.renderDetailLines()}
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    margin: 10,
    padding: 10
  },
  titleContainer: {
    display: 'flex'
  },
  title: {
    color: Colors.tint,
    fontSize: 20,
    fontWeight: 'bold'
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 10,
    justifyContent: 'flex-start',
    borderRadius: 10,
    borderColor: 'black',
    marginLeft: 10,
    marginRight: 10,
    marginTop: -8,
    overflow: 'hidden'
  },
  detailLine: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    padding: 8
  },
  detailLineHeading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  detailLineValue: {
    fontSize: 20,
  }
});
