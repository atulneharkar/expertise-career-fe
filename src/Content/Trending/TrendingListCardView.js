import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../_actions';

class TrendingListCardView extends Component {
	componentWillMount() {
		this.props.getTrendingList();
  }

  renderTrendingCardTemplate() {
  	if(this.props.trendingData.length) {
	  	return this.props.trendingData.map((trending) => {
	      return (
	      	<div key={trending._id} className="trending-card col-xs-4 col-sm-4 col-lg-3">
	      	  <a href={trending.videoLink} target="_blank">
		      		<img alt="Trending pic" src={trending.trendingImage} />
		      		<div className="trending-info">
		      		  <p className="trending-title">{trending.title}</p>
		      		  <p className="trending-category">{trending.trendingCategory}</p>
		      		</div>
	      		</a>
	      	</div>
	      );
	    });
    } else {
    	return (
    	  <div className="no-trending-wrapper">
	    		<p>We have no trending active currently.</p>
	    		<p>For consulting <Link to="/contact-us">Contact Us</Link>.</p>
    		</div>
    	);
    }
  }

  render() {

		return (
			<div className="wrapper trending-card-list clearfix">
			  <h2>Reference Articles</h2>
        {this.renderTrendingCardTemplate()}
      </div>
		);
  }
}

const mapStateToProps = (state) => ({
  trendingData: state.trending.all
});

export default connect(
  mapStateToProps,
  actions
)(TrendingListCardView);
