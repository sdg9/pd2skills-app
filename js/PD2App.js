/*
 * @flow
*/
'use strict'
import React, {Component} from 'react';

import {Text, StyleSheet, Platform, Dimensions, DrawerLayoutAndroid, View} from 'react-native';
import { bindActionCreators } from 'redux';
import { Router, Scene, Schema, } from 'react-native-router-flux';
import { connect } from 'react-redux';

const RouterWithRedux = connect()(Router);

class PD2Skills extends Component {
  render() {
    return (
      <View>
        <Text>Hi</Text>
      </View>
    )
  }
}
