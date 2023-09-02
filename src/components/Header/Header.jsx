import React from 'react';
import {Link} from "react-router-dom";
import "./Header.css";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <>
      <div className='main-header'>
        <div className='container'>
            <div className='links'>
              <ul>
                <li>
                  <Link onClick={scrollToTop} to="/" className='link'>Home</Link>
                </li>
                <li>
                  <Link onClick={scrollToTop} to="/about" className='link'>About</Link>
                </li>
                <li>
                  <Link onClick={scrollToTop} to="/service" className='link'>Service</Link>
                </li>
                <li>
                  <Link onClick={scrollToTop} to="/project" className='link'>Project</Link>
                </li>
                <li>
                  <a href='#contact' className='link'>Contact</a>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default Header;