import React, { useState, useEffect } from 'react';
import './Header.scss';

export default function Header() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50);
    })
  }, []);

  function scrollToMain() {
    const element = document.querySelector('main').offsetTop - 28;
    window.scrollTo({top: element, behavior: 'smooth'});
  }

  return (
    <div className='container'>
      <header>
        <nav className={scroll ? 'bg-white' : 'bg-black'}>
          <ul>
            <li onClick={(() => window.scrollTo({top: 0, behavior: 'smooth'}))}>Home</li>
            <li onClick={(() => scrollToMain())}>About</li>
            <li onClick={(() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'}))}>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  )
};
