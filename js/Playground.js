'use strict';

import React from 'react';
import {View} from 'react-native';

class Playground extends React.Component {
  constructor() {
    super();
    const content = [];
    const define = (name: string, render: Function) => {
      content.push(<Example key={name} render={render} />);
    };

    var Module = require('./core/components/DatePicker');

    Module.__cards__(define);
    this.state = {content};
  }

  render() {
    return (
      <View style={{backgroundColor: 'gray', flex: 1}}>
        {this.state.content}
      </View>
    );
  }
}

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const content = this.props.render(this.state.inner, (inner) => this.setState({inner}));
    return (
      <View>
        {content}
      </View>
    );

  }
}

module.exports = Playground;
