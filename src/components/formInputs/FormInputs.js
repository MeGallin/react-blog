import React from 'react';
import './FormInputs.css';

function FormInputs({
  name,
  type,
  placeholder,
  onChange,
  className,
  value,
  error,
  children,
  label,
  ...props
}) {
  return (
    <React.Fragment>
      <label htmlFor={name}>
        {label}
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          className={className}
          value={value}
          error={error}
        />
      </label>
      {error && <p className="failedLoginMessage">{error}</p>}
    </React.Fragment>
  );
}

export default FormInputs;
