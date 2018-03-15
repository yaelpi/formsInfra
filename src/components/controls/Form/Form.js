
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {form} from 'react-validation';


class Form extends Component {
  static propTypes = {
    getValues: PropTypes.func.isRequired,
    validate: PropTypes.func.isRequired,
    validateAll: PropTypes.func.isRequired,
    showError: PropTypes.func.isRequired,
    hideError: PropTypes.func.isRequired,
  };
constructor(props){
  super(props);
  this.validateAll  = props.validateAll;
}
  render() {
    const { getValues, validate, validateAll, showError, hideError, ...props } = this.props;

    return (
      <form {...props} />
    )
  }
}
export default form(Form);
