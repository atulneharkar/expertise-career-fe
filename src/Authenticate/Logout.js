import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../_actions';

class Logout extends Component {
  render() {
    return (
      <div>
        You have successfully logged out from the application.
      </div>
    );
  }
}

export default connect(null, actions)(Logout);
