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
	    		<p>Resources matching the selected category not found.</p>
    		</div>
    	);
    }
  }

  handleTrendingChange(event) {
    const selectedTrendingCategory = event.target.value;
  	this.props.getTrendingByCategory(selectedTrendingCategory);
  }

  renderSelectTrending() {
    return(
      <select 
        onChange={(e) => this.handleTrendingChange(e)}>
        <option>All</option>
        <option value="UX">UX</option>
        <option value="VD">VD</option>
        <option value="Back End">Back End</option>
        <option value="Front End">Front End</option>
        <option value="General">General</option>
      </select>
    );
  }

  render() {

		return (
			<div className="wrapper trending-card-list clearfix">
			  <h2>
			    Useful resources 
			  </h2>
			  <div className="clearfix">
			    <p className="trending-filter">Filter by: {this.renderSelectTrending()}</p>
			  </div>
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
