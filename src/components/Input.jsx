import React from 'react'
import attach from "../img/attach.jpg"
import gallery from "../img/gallery.jpg"
const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something...'  
        value="" className='Input' />
      <div className='send'>
        <img src={attach} alt="" className='inputImage' />
        <input type="file" style={{display:"none"}} id='file'    />
        <label htmlFor="file">
          <img src={gallery} alt="" className='inputImage' />
        </label>
        <button  className='inputButton'>Send</button>
      </div>
    </div>
  )
}

export default Input
