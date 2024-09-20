import React from 'react';

export const SearchBar = () => {
  return (
    <div className='SearchBar-container'>
      <input
        type='text'
        placeholder='Search users...'
        className='SearchBar-input'
      />
    </div>
  );
};
