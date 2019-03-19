import React, { PureComponent } from 'react';
import {StyleSheet, View} from 'react-native';

class PublicHeader extends PureComponent {
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

