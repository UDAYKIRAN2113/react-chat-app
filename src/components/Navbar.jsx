import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Uday Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/14395818/pexels-photo-14395818.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' className="profilePhoto" />
        <span>Uday</span>
        <button className='logout' >logout</button>
      </div>
    </div>
  )
}

export default Navbar
