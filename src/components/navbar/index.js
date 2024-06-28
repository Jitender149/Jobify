import React from 'react'
import './navbar.css'
import profileImg from './profile.jpg'
import NavbarButton from './navbarButton'
import { FaHome, FaSearchDollar, FaSignOutAlt } from 'react-icons/fa'
import { FcAbout } from 'react-icons/fc'
import { CiCircleInfo } from 'react-icons/ci'

export default function NavBar({user}) {

  console.log(user);
  return (
    <div className='navbar-container'>
      <div className='profile'>
        <img src={profileImg} className='profile-image' alt='profile'></img>
        <p className='user-name'>{}</p>
      </div>
      <div>
        <NavbarButton title="Home" to="/" icon={<FaHome />}/>
        <NavbarButton title="Find Jobs" to="/jobPage" icon={<FaSearchDollar />}/>
        <NavbarButton title="About Us" to="/aboutUs" icon={<CiCircleInfo />}/>
      </div>
      <NavbarButton title="Sign Out" to="" icon={<FaSignOutAlt/>} />
    </div>
  )
}
