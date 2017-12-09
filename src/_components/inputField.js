import React from 'react';

/*Render text input field*/
export const renderInputField = ({
  input,
  label,
  type,
  setValue,
  onValueChange,
  meta: { touched, error }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input 
        {...input} 
        placeholder={label} 
        type={type} 
        value={setValue} 
        onChange={onValueChange ? (e) => onValueChange(e) : () => {}} />
      {touched &&
        ((error && <p className="error">{error}</p>))}
    </div>
  </div>
);

/*Render hidden input field*/
export const renderHiddenInputField = ({
  input,
  type
}) => (
  <input 
    {...input} 
    type={type} />
);

/*Render input field of type file*/
const adaptFileEventToValue = delegate =>
  e => delegate(e.target.files)

export const renderFileInputField = ({
  input: {
    value: omitValue,
    onChange,
    onBlur,
    ...inputProps
  },
  label,
  meta: { omitMeta, touched, error },
  ...props,
}) =>
  <div>
    <label>{label}</label>
    <div>
      <input
        onChange={adaptFileEventToValue(onChange)}
        onBlur={adaptFileEventToValue(onBlur)}
        type="file"
        accept="image/*"
        {...inputProps}
        {...props}
      />
      {touched &&
            ((error && <p className="error">{error}</p>))}
    </div>
  </div>