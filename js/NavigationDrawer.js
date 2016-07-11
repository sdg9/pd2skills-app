import React, { PropTypes } from 'react';
import {Text, StyleSheet, Platform, Dimensions, DrawerLayoutAndroid, View} from 'react-native';
import Drawer from 'react-native-drawer';
import { DefaultRenderer, Actions } from 'react-native-router-flux';

//import TabView from './TabView';

const propTypes = {
  navigationState: PropTypes.object,
};

const NavItems = () => {
  return (
    <View><Text>HI</Text></View>
  )
}

class NavigationDrawer extends React.Component {
  render() {
    const state = this.props.navigationState;
    const children = state.children;
    return (
      <Drawer
        ref="navigation"
        type="displace"
        onOpen={() => Actions.refresh({ key: state.key, open: true })}
        onClose={() => Actions.refresh({ key: state.key, open: false })}
        content={<NavItems />}
        tapToClose
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        negotiatePan
        tweenHandler={(ratio) => ({
          main: { opacity: Math.max(0.54, 1 - ratio) },
        })}
      >
        <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>
    );
  }
}

NavigationDrawer.propTypes = propTypes;

export default NavigationDrawer;
