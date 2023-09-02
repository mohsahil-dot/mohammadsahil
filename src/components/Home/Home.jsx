import React from 'react';
import "./Home.css";
import Card from './Card/Card.jsx';


const Home = () => {
  return (
    <>
      <div className='main-home'>
        <div className='container'>
          <div className='detail'>
            <h1>Hi. I'm <span>Mohammad Sahil.</span></h1>
            <h1>A Web Developer.</h1>
            <div className='main-line'>
              <h3>a creative enthusiast crafting captivating websites, aesthetic videos, and all things cool.</h3>
            </div>
          </div>
        </div>
      </div>
      <Card />
    </>
  )
}

export default Home;