import React from 'react'
import "./NavBar.css"
function NavBar({ handleSearch }) {
  
  return (
    <div className='navbar'>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
      <img className='avatar' src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt="Avatar" />
      <img className='bell' src='/images/icons8-bell-24.png' alt="Bell_Icon" />
      <img className='arrow' src='/images/icons8-sort-down-30.png' alt="Arrow" />
      <img className='search' src='/images/icons8-search-48.png' alt="Search" />




    </div>
  )
}

export default NavBar
