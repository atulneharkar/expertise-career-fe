import React, { Component, PropTypes } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const renderOptions = (lists) => {
  return lists.map((list) => {
    return <option key={list.key} value={list.key}>{list.value}</option>
  });
}

export const renderSelectField = ({
  input,
  label,
  optionList,
  setValue,
  onValueChange,
  meta: { touched, error }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <Select
        {...input} 
        value={setValue}
        options={optionList}  
        onChange={(e) => onValueChange(e)} />
      {touched &&
        ((error && <p className="error">{error}</p>))}
    </div>
  </div>
);