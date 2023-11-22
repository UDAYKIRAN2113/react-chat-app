import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

const Message = ({message}) => {

    const {currentUser} = useContext(AuthContext);
    const { data } = useContext(ChatContext);
    const ref = useRef()

    useEffect(() => {
      ref.current?.scrollIntoView({behaviour:"smooth"})
    }, [message])


  // console.log(message)
  return (
    <div ref={ref}
    // eslint-disable-next-line no-template-curly-in-string
    className={'message ${message.senderId === currentUser.uid && "owner"}'}>
      
      <div className='messageInfo'>
        <img src={
          message.senderId === currentUser.uid 
          ? currentUser.photoURL 
          : data.user.photoURL
        } 
          alt="" 
          className='messageinfoImage' />
        <span>Just now</span>
      </div>
      <div className='messageContent'>
        <p className='para'>{message.text}</p>
        {message.img && <img src={message.img}
        alt="" 
        className='messageContentImage' />}
      </div>
    
    </div>
  )
}

export default Message
