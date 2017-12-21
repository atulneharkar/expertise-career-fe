import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CourseDetails extends Component {
  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        Course Details
      </div>
    );
  }
}

export default CourseDetails;
