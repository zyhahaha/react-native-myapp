import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';

class PublicHeader extends Component {
  constructor(props) {
    super(props);
  }

  changeMenuState = data => {
    // this.props.changeMenuState(data)
  }

  render() {
    return (
      <View>
        header
      </View>
    )
  }
}

export default PublicHeader;

