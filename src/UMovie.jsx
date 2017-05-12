import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

@connect(state => ({

}))
export default class UMovie extends Component {
  static propTypes = {
    devTools: PropTypes.any
  };

  static contextTypes = {
    messages: PropTypes.object.isRequired
  };

  state = {}

  render() {
    return (
      <div>
        Salutation!
      </div>
    );
  };
};