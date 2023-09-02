import React from 'react';
import mithu from "../../images/wmithu.png";
import "./About.css";

const About = () => {
  return (
    <>
      <div className='main-about'>
        <div className='container'>
          <div className='heading'>
          <h3>About me</h3>
          </div>
          <div className='images'>
            <article class="card">
                  <figure>
                      <img
                          src={mithu}
                          alt="Sahil w/ his coding partner"
                      />
                      <figcaption>
                          <h3>Sahil w/ his coding partner</h3>
                      </figcaption>
                  </figure>
              </article>
          </div>
          <div className='content'>
            <span>I’m Mohammad Sahil.</span><br/><br/><p>I’m a Web Developer. As an aspiring professional, I am eager to work on real-world projects and collaborate with team members to learn new technologies.<br/><br/>With each project, I strive to harmonize elegant design elements with seamless functionality, ensuring that every pixel and line of code contributes to a harmonious whole.<br/><br/>Explore my portfolio to see the passion and dedication I pour into each project. Whether it's web design, graphic design, or any other creative endeavor, I'm always up for a new adventure.<br/><br/>Thanks for dropping by. Let's chat and discover how we can make something amazing together.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;