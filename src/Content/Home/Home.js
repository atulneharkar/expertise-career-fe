import React, { Component } from 'react';
import { connect } from 'react-redux';

import OurServicesCardView from '../OurServices/OurServicesCardView';
//import CourseListCardView from '../Course/CourseListCardView';
import TrendingListCardView from '../Trending/TrendingListCardView';

import * as actions from '../../_actions';

class Home extends Component {
	render() {
		return (
			<div>
				<OurServicesCardView />
				<TrendingListCardView />
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    
  }
}

export default connect(mapStateToProps, actions)(Home);