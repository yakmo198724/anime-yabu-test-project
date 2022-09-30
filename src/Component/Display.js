import React from 'react'
import '../Style/LogIn.css';

const Display = () => {
  return (
    <div className='rightDisplay'>
      <img src="/images/tanjiro.png" alt=''/>
      <h1>anime<span>yabu</span>.</h1>
    <p>Assista animes online em HD, legendado ou dublado,<br/>
    no seu celular ou computador.<br/> 
    <strong>Animeyabu, o seu portal de animes online!</strong>
    </p>
    <div className='flex-container'>
    <div className='shapes-01'></div>
    <div className='shapes-02'></div>
    <div className='shapes-03'></div>
    </div>
    </div>
  )
}

export default Display
