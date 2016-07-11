/**
 * Login landing page for the Discover application
 * @providesModule SkillItem
 * @flow
 */
'use strict';
import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import ScrollableTabView from 'react-native-scrollable-tab-view'

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

class SkillItem extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
  }

  render() {
    return (
      <View >
        <Text>Name</Text>
        <Image source={} />
      </View>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SkillItem);
