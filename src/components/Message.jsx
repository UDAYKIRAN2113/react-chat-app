import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img src="https://images.pexels.com/photos/17776988/pexels-photo-17776988/free-photo-of-brunette-model-in-dress-posing-in-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className='messageinfoImage' />
        <span>just now</span>
      </div>
      <div className='messageContent'>
        <p className='para'>hello</p>
        <img src="https://images.pexels.com/photos/14395818/pexels-photo-14395818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='messageContentImage' />
      </div>
    
    </div>
  )
}

export default Message
