import React from 'react';

export const renderInputTextField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <p className="error">{error}</p>))}
    </div>
  </div>
);

export const renderHiddenInputTextField = ({
  input,
  type
}) => (<input {...input} type={type} />);