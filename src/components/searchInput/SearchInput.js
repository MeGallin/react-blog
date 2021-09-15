import React from 'react';
import './SearchInput.scss';

const SearchInput = ({
  type,
  placeholder,
  handleSearch,
  className,
  value,
  ...props
}) => {
  return (
    <div>
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        onChange={handleSearch}
        value={value}
      ></input>
    </div>
  );
};

export default SearchInput;
