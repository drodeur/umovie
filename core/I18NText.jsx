import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class I18NText extends Component {
  static propTypes = {
    value: PropTypes.object.isRequired
  };

  static contextTypes = {
    lang: PropTypes.string.isRequired
  };

  render() {
    return (
      <span>{this.props.value[this.context.lang]}</span>
    );
  }
};