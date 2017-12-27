import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class AdminSubNav extends Component {
  render() {
    return (
      <div className="admin-sub-nav">
        <ul>
          <li>
            <NavLink to="/admin/users" activeClassName="active">Users</NavLink>
          </li>
          <li>
            <NavLink to="/admin/courses" activeClassName="active">Courses</NavLink>
          </li>
          <li>
            <NavLink to="/admin/trendings" activeClassName="active">Trendings</NavLink>
          </li>
          <li>
            <NavLink to="/admin/queries" activeClassName="active">Queries</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default AdminSubNav;
