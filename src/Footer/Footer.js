import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../_actions';

class Footer extends Component {
  render() {
    return (
      <div>
        Footer
      </div>
    );
  }
}

export default connect(null, actions)(Footer);
