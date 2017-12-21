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
	      	<div key={trending._id}>
	      	  <a href={trending.videoLink} target="_blank">
		      		<img alt="Trending Picture" src={trending.trendingImage} width="100"/>
		      		<p>{trending.title}</p>
		      		<p>{trending.trendingCategory}</p>
	      		</a>
	      	</div>
	      );
	    });
    } else {
    	return (
    	  <div>
	    		<p>We have no trending active currently.</p>
	    		<p>For consulting <Link to="/contact-us">Contact Us</Link></p>
    		</div>
    	);
    }
  }

  render() {

		return (
			<div>
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
