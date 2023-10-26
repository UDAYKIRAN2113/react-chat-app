import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
          <input type='text' placeholder='Find a user'  className='searchInput' />
      </div>
    
      <div className='userChat'>
        <img src="https://images.pexels.com/photos/17776988/pexels-photo-17776988/free-photo-of-brunette-model-in-dress-posing-in-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' className='searchImage' />
        <div className='userChatInfo'>
            <span>Ms.Stark</span>
        </div>
      </div>
      
    </div>
  )
}

export default Search
