import React from 'react';

export const renderSelectField = ({
  select,
  label,
  meta: { touched, error }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <select {...select}>
        <option>Please Select</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      {touched &&
        ((error && <p className="error">{error}</p>))}
    </div>
  </div>
);