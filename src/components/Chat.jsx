import React, { useContext } from 'react'
import cam from "../img/cam.jpg"
import Add from "../img/add.jpg"
import More from "../img/more.jpg"
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../context/ChatContext'

const Chat = () => {

    const { data } = useContext(ChatContext) ;

  
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>{data.user?.displayName}</span>
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
