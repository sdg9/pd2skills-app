/**
 * Login landing page for the Discover application
 * @providesModule SkillTree
 * @flow
 */
'use strict';
import React, {Component} from 'react';
import {Text, TextInput, View, ScrollView, Image} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import ScrollableTabView from 'react-native-scrollable-tab-view'
import SkillItem from 'SkillItem';
import SkillBranch from 'SkillBranch';

export default class SkillTree extends Component {
  constructor(props) {
    super(props);
    console.log("Trees: ", props.tree);
  }

  render() {
    console.log('Tree', this.props.tree)
    return (
      <View style={{flex: 1, alignItems: 'center', backgroundColor: 'red'}}>
        <Text>{this.props.tree.title}</Text>
        <View style={{flexDirection: 'row', flex: 1, backgroundColor: 'blue'}}>
          <SkillBranch branch={this.props.tree.branches[0]} />
          <SkillBranch branch={this.props.tree.branches[1]} />
          <SkillBranch branch={this.props.tree.branches[2]} />
        </View>

      </View>
    );
  }
}
