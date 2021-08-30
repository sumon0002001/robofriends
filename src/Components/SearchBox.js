import React from 'react'

const SearchBox = ({changeHandler}) => {
  return (
    <div className='pa2'>
      <input 
      className='pa3 ba b--green bg-lightest-blue'
      type="text"
      placeholder="search your robo friends"
      onChange={changeHandler} />  
    </div>
  )
}

export default SearchBox
