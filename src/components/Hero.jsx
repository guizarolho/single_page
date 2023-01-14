import React from 'react';
import './Hero.scss';

export default function Hero() {
  return (
    <div className='hero'>
      <h1 className='hero--title'>Hero Title</h1>
      <img className='hero--img' src={require('../img/sam-goodgame-a96Pb3auxDo-unsplash.jpg')} alt='night-sky' />
    </div>
  )
}
