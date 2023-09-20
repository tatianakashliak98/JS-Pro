import React from 'react'
import './style.css'
const Loader = () => {
  return (
     <div className='spinner-container'>
        <div className='spinner'></div>
        <div className='spinner-inner'></div>
        <div className='spinner-text'>Loading ...</div>
    </div>
  )
}

export default Loader
