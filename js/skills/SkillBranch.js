
/**
 * Login landing page for the Discover application
 * @providesModule SkillBranch
 * @flow
 */
'use strict';
import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
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

class SkillBranch extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text>{this.props.branch.name}</Text>
        { this.props.branch.tiers.map((branchTier, idx) => {
          return <View key={idx} style={{flexDirection: 'row'}}>
          { branchTier.skills.map((branchTierSkill, btsIdx) => {
            return <SkillItem key={btsIdx} data={branchTierSkill} />
          }) }
          </View>

        })
      }
      </View>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SkillBranch);
