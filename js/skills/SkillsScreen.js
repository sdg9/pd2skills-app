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
  skills: state.skills
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
      <ScrollableTabView style={{marginTop: 50}}>
          <SkillTree tabLabel="Mastermind" tree={this.props.skills.trees[0]} />
          <SkillTree tabLabel="Enforcer" tree={this.props.skills.trees[1]} />
          <SkillTree tabLabel="Technician" tree={this.props.skills.trees[2]} />
          <SkillTree tabLabel="Ghost" tree={this.props.skills.trees[3]} />
          <SkillTree tabLabel="Fugitive" tree={this.props.skills.trees[4]} />
          <SkillTree tabLabel="Infamy" tree={this.props.skills.trees[4]} />
      </ScrollableTabView>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SkillsScreen);
