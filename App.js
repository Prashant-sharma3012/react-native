import React, { Component } from 'react';
import AppNavigator from './navigation/AppNavigator';
import createstore from './store';
import {Provider} from 'react-redux';

const store = createstore();
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}
