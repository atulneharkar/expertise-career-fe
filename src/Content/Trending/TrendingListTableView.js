import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../_actions';

class TrendingListTableView extends Component {
	componentWillMount() {
		this.props.getTrendingList();
  }

  handledelete(trendingId) {
    this.props.removeTrending(trendingId);
  }

  renderTrendingPicture(avatar) {
    if(avatar) {
      return (
        <img alt="Trending" src={avatar} width="50" height="50" />
      );
    } else {
      return (
        <img alt="Trending" src="default.img" width="50" height="50" />
      );
    }
  }

  renderTrendings() {
    return this.props.trendingData.map((trending) => {
      return (
        <tr key={trending._id}>
          <td>{this.renderTrendingPicture(trending.trendingImage)}</td>
          <td>{trending.title}</td>
          <td>{trending.videoLink}</td>
          <td>{trending.trendingCategory}</td>
          <td><Link to={`/edit-trending/${trending._id}`}>Edit</Link></td>
          <td><span onClick={() => this.handledelete(trending._id)}>Delete</span></td>
        </tr>
      );
    });
  }

  renderTrendingListTemplate() {
  	if(this.props.trendingData.length) {
	  	return(
	  		<table>
	        <thead>
	          <tr>
	            <td></td>
	            <td>Title</td>
	            <td>Link</td>
	            <td>Trending Category</td>
	            <td>Edit</td>
	            <td>Delete</td>
	          </tr>
	        </thead>
	        <tbody>
	          {this.renderTrendings()}
	        </tbody>
	      </table>
	  	);
    } else {
    	return (
    		<p>No Trending Found.</p>
    	);
    }
  }

  render() {

		return (
			<div>
			  <Link to="/create-trending">Create Trending</Link>
        {this.renderTrendingListTemplate()}
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
)(TrendingListTableView);
