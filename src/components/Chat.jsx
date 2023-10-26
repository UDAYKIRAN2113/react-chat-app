import React from 'react'
import cam from "../img/cam.jpg"
import Add from "../img/add.jpg"
import More from "../img/more.jpg"
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Stark</span>
        <div className='chatIcons'>
            <img src={cam} alt="" className='chatImage' />
            <img src={Add} alt="" className='chatImage' />
            <img src={More} alt="" className='chatImage' />
        </div>
        </div>
        <Messages />
        <Input />
      
    </div>
  )
}

export default Chat
