import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { auth } from '../firebase'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {

    const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className="logo">Uday Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt='' className="profilePhoto" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)} className='logout' ><Link to="/">logout</Link></button>
      </div>
    </div>
  )
}

export default Navbar
