import React,{useState} from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}


export const SearchBar = ({onSearch} : SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  }

  return (
    <div className='SearchBar-container'>
      <input
        type='text'
        placeholder='Search users...'
        className='SearchBar-input'
        value={searchQuery}
        onChange={handleInputChange}
      />
    </div>
  );
};
