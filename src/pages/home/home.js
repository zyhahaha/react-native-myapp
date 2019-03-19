import React, { Component } from 'react';
import http from '@/http/http.js';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import './home.less';

import Menu from '@/components/menu/menu';
import PublicHeader from '@/components/header/header';
import HomeContent from './components/content/content';
import BannerEl from './components/banner/banner';

// import axios from 'axios';
// import { homeContentData } from '@/assets/api/api.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.getHomeContentData();
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

  getHomeContentData(){
    http.get('/homeContentData').then(res => {
      let homeContentData = res.data.data;
      this.setState({
        homeContentData
      })
    });
  }


  render() {
    return (
      <div className="main">
        {/* header */}
        <PublicHeader isShowMenu={this.state.isShowMenu} changeMenuState={this.changeMenuState} checkName="home" />
        {/* banner */}
        {this.state.homeContentData.bannerData && <BannerEl bannerData={this.state.homeContentData.bannerData} />}
        {/* content */}
        {this.state.homeContentData.list && <HomeContent homeContentList={this.state.homeContentData.list} />}
        {/* menu */}
        {/* {this.state.isShowMenu && <Menu />} */}
        {<Menu changeMenuStateClose={this.changeMenuStateClose} isShowMenu={this.state.isShowMenu} />}
      </div>
    );
  }
}

export default Home;
