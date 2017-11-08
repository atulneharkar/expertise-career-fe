import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../_actions';

class Header extends Component {
  render() {
    return (
      <div>
        Header
      </div>
    );
  }
}

export default connect(null, actions)(Header);
