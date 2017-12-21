import React, { Component } from 'react';

import UserList from '../User/UserList';
import TrendingListTableView from '../Trending/TrendingListTableView';
import CourseListTableView from '../Course/CourseListTableView';

class AdminDashboard extends Component {
  render() {
    return (
      <div>
        <UserList />
        <CourseListTableView />
        <TrendingListTableView />
      </div>
    );
  }
}

export default AdminDashboard;
