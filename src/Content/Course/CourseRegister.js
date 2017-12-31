import React, { Component } from 'react';

class CourseRegister extends Component {
  render() {
    return (
      <div>
        <span className="close-icon" onClick={() => this.props.handleRegisterModalClose(false)}>x</span>
        Make payment using one of the following options and Admin will contact you and send you webinar details/link via email.

        <p>1. Paytm</p>
        <p>2. Tez</p>
        <p>3. Account transfer</p>
      </div>
    );
  }
}

export default CourseRegister;
