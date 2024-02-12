import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };
  return (
    <>
      <form
        onSubmit={onhandleSubmit}
        className="search flex items-center justify-center group-focus-within:bg-white/[0.15] my-3">
        <span className='border border-white rounded-2xl p-1' >
          <input
            type="text"
            placeholder='Search...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='rounded-l-full border text-white px-4 py-2 bg-transparent outline-none border-none' />
          <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
            <SearchIcon />
          </IconButton>
        </span>

      </form>

    </>
  )
}

export default SearchBar
