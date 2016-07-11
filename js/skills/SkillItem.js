/**
 * Login landing page for the Discover application
 * @providesModule SkillItem
 * @flow
 */
'use strict';
import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
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

const imageList = {};
imageList['inspire'] = require('../lib/img/skills/inspire.png');

class SkillItem extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
  }

  render() {
    if (this.props.data) {
      console.log('Name:', this.props.data.name)
      return (
        <TouchableOpacity onPress={this.props.onPress} onLongPress={this.props.onLongPress}>
        <Text>{this.props.data.name}</Text>
        <Image source={imageList[this.props.data.name]} />
        </TouchableOpacity>
      )
    }
    return (
      <TouchableOpacity onPress={this.props.onPress} onLongPress={this.props.onLongPress}>
      <Image source={require('../lib/img/skills/akimbo.png')} />
      </TouchableOpacity>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SkillItem);
