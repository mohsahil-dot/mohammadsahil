import React from 'react';
import "./Footer.css";
import {SiBento} from "react-icons/si";
import {AiFillYoutube, AiFillGithub, AiFillLinkedin} from "react-icons/ai";

const Footer = () => {
  return (
    <>
        <hr/>
        <section id='contact'>
          <div className='container'>
            <div className='content'>
              <div className='line'>
                <p>Got a Project in mind?</p>
                <h4>Let's talk</h4>
                <p>+91 7707969592</p>
              </div>
              <div className='icons'>
              <a href='https://bento.me/mohammadsahil' target="_blank" rel="noreferrer"><SiBento className='icon' style={{margin: -3, padding: -3}} size={18}/></a>
              <a href='https://github.com/mohsahil-dot' target="_blank" rel="noreferrer"><AiFillGithub className='icon' style={{margin: -3, padding: -3}} size={18}/></a>
              <a href='https://linkedin.com/in/sahil1511/' target="_blank" rel="noreferrer"><AiFillLinkedin className='icon' style={{margin: -3, padding: -3}} size={18}/></a>
              <a href='https://www.youtube.com/@sasahill/' target="_blank" rel="noreferrer"><AiFillYoutube className='icon' style={{margin: -3, padding: -3}} size={18}/></a>
              </div>
            </div>
            <div className='copyright'>
              <p>&copy; 2023 Mohammad Sahil</p>
            </div>
          </div>
        </section>
    </>
  )
}

export default Footer