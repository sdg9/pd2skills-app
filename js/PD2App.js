/*
 * @flow
*/
'use strict'
import React, {Component} from 'react';

import {Text, StyleSheet, Platform, Dimensions, DrawerLayoutAndroid, View} from 'react-native';
import { bindActionCreators } from 'redux';
import { Router, Scene, Schema, } from 'react-native-router-flux';
import { connect } from 'react-redux';
import SkillsScreen from 'SkillsScreen';
import NavigationDrawer from './NavigationDrawer';

const RouterWithRedux = connect()(Router);

export default class PD2Skills extends Component {
  render() {
    return (
      <RouterWithRedux >
      <Scene key="tabbar" component={NavigationDrawer}>
      <Scene key="root">
      <Scene key="skills" component={SkillsScreen} title="Skills"/>
      </Scene>
      </Scene>
      </RouterWithRedux>
    )
  }
}
