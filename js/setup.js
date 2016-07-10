/**
 * App entry point.
 * Mostly application bootstrapping
 *
 * @flow
 */
'use strict'
import React, {Component} from 'react';
import {Platform, BackAndroid, ToastAndroid, DeviceEventEmitter} from 'react-native';
import { Provider } from 'react-redux';
import env from 'env';
import PD2App from './PD2App';
import Playground from './Playground';

export default setup = (): ReactClass<{}> => {
  class Root extends Component {

    render() {
      if (env.isPlayground) {
        return (
          <Provider store={store}>
            <Playground />
          </Provider>
        );
      }
      return (
        <Provider store={store}>
          <PD2App />
        </Provider>
      );
    }
  }

  return Root;
}
