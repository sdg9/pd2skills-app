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

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

class SkillTree extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'red'}}>
      <Text>{this.props.treeName}</Text>
      <SkillItem />
      <SkillItem />
      <SkillItem />
      <SkillItem />

      </View>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SkillTree);
