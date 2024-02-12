import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className="main h-auto border-b-[1px] border-b-white flex justify-between items-center">
        {/* logo */}
        <Link to="/">
        <img src="/logo.png" alt="" className='h-[30px] w-[30px] ml-4 '/>
        </Link>
        {/* search */}
        <div className="right mr-4">
        <SearchBar />
        </div>
    </div>
      
    </>
  )
}

export default Header
