import React from 'react';
import {PropTypes} from "react";
import {StyleSheet, Text, View} from "react-native";
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

const contextTypes = {
  drawer: React.PropTypes.object,
};

const propTypes = {
  name: PropTypes.string,
  sceneStyle: View.propTypes.style,
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderWidth: 2,
    borderColor: 'red',
  },
});

const TabView = (props, context) => {
  const drawer = context.drawer;
  return (
    <View style={[styles.container, props.sceneStyle ]}>
      <Text>Tab {props.title}</Text>
      <Button onPress={() => { drawer.close(); Actions.tab1(); }}>Skills</Button>
      <Button onPress={() => { drawer.close(); Actions.tab2(); }}>Perks</Button>
      <Button onPress={() => { drawer.close(); Actions.tab3(); }}>Infamy</Button>
      <Button onPress={() => { drawer.close(); Actions.tab4(); }}>Primary Weapon</Button>
      <Button onPress={() => { drawer.close(); Actions.tab5(); }}>Secondary Weapon</Button>
      <Button onPress={() => { drawer.close(); Actions.echo(); }}>Armor</Button>
      <Button onPress={() => { drawer.close(); Actions.echo(); }}>Stats</Button>
      <Button onPress={() => { drawer.close(); Actions.echo(); }}>Load</Button>
    </View>
  );
};

TabView.contextTypes = contextTypes;
TabView.propTypes = propTypes;

export default TabView;
