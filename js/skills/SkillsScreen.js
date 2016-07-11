/**
 * Login landing page for the Discover application
 * @providesModule SkillsScreen
 * @flow
 */
'use strict';
import React, {Component} from 'react';
import {Text, TextInput, View, ScrollView, Image} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import ScrollableTabView from 'react-native-scrollable-tab-view'
import SkillTree from 'SkillTree';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

class SkillsScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
  }

  render() {
    return (
      <ScrollView>
          <SkillTree tabLabel="Mastermind" treeName="Mastermind"  />

      </ScrollView>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SkillsScreen);
