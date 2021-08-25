import React from 'react';
import './SearchInput.css';

const SearchInput = ({
  type,
  placeholder,
  handleSearch,
  className,
  ...props
}) => {
  return (
    <div>
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        onChange={handleSearch}
      ></input>
    </div>
  );
};

export default SearchInput;
