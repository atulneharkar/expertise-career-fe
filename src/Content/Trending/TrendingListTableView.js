import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../_actions';
import AdminSubNav from '../AdminDashboard/AdminSubNav';

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
        <div className="table-responsive">
  	  		<table className="table table-striped">
  	        <thead>
  	          <tr>
  	            <th></th>
  	            <th>Title</th>
  	            <th>Link</th>
                <th>Category</th>
  	            <th>Edit</th>
  	            <th>Delete</th>
  	          </tr>
  	        </thead>
  	        <tbody>
  	          {this.renderTrendings()}
  	        </tbody>
  	      </table>
        </div>
	  	);
    } else {
    	return (
    		<p>No Trending Found.</p>
    	);
    }
  }

  render() {

		return (
      <div className="admin-dashboard-wrapper wrapper">
        <AdminSubNav />
  			<div className="trending-list">
          <p className="list-title">
            Trending List
          </p>
          <div className="create-trending-link">
  			    <Link to="/create-trending">Create Trending</Link>
          </div>
          {this.renderTrendingListTemplate()}
        </div>
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
