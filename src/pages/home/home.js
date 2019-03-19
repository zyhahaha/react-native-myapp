import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import PublicHeader from '../../components/header/header';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class App extends Component {
  constructor(props) {
    super(props);
    // this.getHomeContentData();
  }

  static propTypes = {
    // formData: PropTypes.object.isRequired
  }

  state = {
    isShowMenu: false,
    homeContentData: {}
  }

  changeMenuState = isShowMenu => {
    this.setState({
      isShowMenu: true
    })
  }

  changeMenuStateClose = isShowMenu => {
    this.setState({
      isShowMenu: false
    })
  }

  // getHomeContentData(){
  //   http.get('/homeContentData').then(res => {
  //     let homeContentData = res.data.data;
  //     this.setState({
  //       homeContentData
  //     })
  //   });
  // }


  render() {
    return (
      <View>
        <Text>main</Text>
        {/* header */}
        <View>
          <PublicHeader isShowMenu={this.state.isShowMenu} changeMenuState={this.changeMenuState} />
        </View>
        
        {/* banner */}
        {/* {this.state.homeContentData.bannerData && <BannerEl bannerData={this.state.homeContentData.bannerData} />} */}
        {/* content */}
        {/* {this.state.homeContentData.list && <HomeContent homeContentList={this.state.homeContentData.list} />} */}
        {/* menu */}
        {/* {this.state.isShowMenu && <Menu />} */}
        {/* {<Menu changeMenuStateClose={this.changeMenuStateClose} isShowMenu={this.state.isShowMenu} />} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
