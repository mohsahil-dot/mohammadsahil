import React from 'react';
import mostRecentProject from "../../images/sahilscorner.png";
import tincat from "../../images/tincat.png";
import "./Project.css";

const Project = () => {
  return (
    <>
        <div className='main-project'>
            <div className='container'>
                <div className='heading'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 67 67" fill="none" className='star1'>
                        <path d="M51.5997 46.809C49.8233 47.2336 47.9691 47.4583 46.0627 47.4583C32.9575 47.4583 22.3335 36.8344 22.3335 23.7292C22.3335 22.3795 22.4462 21.0561 22.6627 19.7679C22.5616 19.8651 22.4572 19.9546 22.3473 20.0381C21.5639 20.6327 20.5883 20.8535 18.637 21.295L16.8606 21.697C9.99394 23.2506 6.56064 24.0274 5.7438 26.6541C4.92696 29.281 7.26757 32.0179 11.9488 37.4918L13.1599 38.908C14.4901 40.4635 15.1552 41.2413 15.4544 42.2036C15.7537 43.1659 15.6531 44.2035 15.452 46.2791L15.2689 48.1685C14.5612 55.4721 14.2073 59.1239 16.3458 60.7472C18.4843 62.3706 21.6989 60.8907 28.1282 57.9304L29.7914 57.1644C31.6183 56.3233 32.5317 55.9028 33.5002 55.9028C34.4686 55.9028 35.382 56.3233 37.2089 57.1644L38.8722 57.9304C45.3014 60.8907 48.516 62.3706 50.6547 60.7472C52.7931 59.1239 52.4391 55.4721 51.7314 48.1685L51.5997 46.809Z" fill="#ACDDA3" stroke="black" stroke-width="0.00256"/>
                        <path opacity="0.5" d="M25.5522 15.0984L24.6374 16.7395C23.6326 18.5421 23.1302 19.4434 22.3468 20.0381C22.4567 19.9546 22.5611 19.8651 22.6622 19.7679C22.4457 21.0561 22.333 22.3795 22.333 23.7292C22.333 36.8344 32.9568 47.4583 46.0623 47.4583C47.9687 47.4583 49.8227 47.2336 51.5993 46.809L51.5479 46.2791C51.3466 44.2035 51.2461 43.1659 51.5454 42.2036C51.8447 41.2413 52.5096 40.4635 53.8399 38.908L55.0512 37.4918C59.7322 32.0179 62.0728 29.2807 61.2559 26.6541C60.4391 24.0274 57.0059 23.2506 50.1392 21.6969L48.3629 21.295C46.4115 20.8535 45.4358 20.6327 44.6525 20.0381C43.8692 19.4434 43.3667 18.5421 42.3619 16.7395L41.4471 15.0984C37.9109 8.75501 36.1429 5.58334 33.4998 5.58334C30.8564 5.58334 29.0884 8.75504 25.5522 15.0984Z" fill="#ACDDA3" stroke="black" stroke-width="0.00256"/>
                    </svg>
                    <h3>Projects</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 67 67" fill="none" className='star2'>
                        <path d="M51.5997 46.809C49.8233 47.2336 47.9691 47.4583 46.0627 47.4583C32.9575 47.4583 22.3335 36.8344 22.3335 23.7292C22.3335 22.3795 22.4462 21.0561 22.6627 19.7679C22.5616 19.8651 22.4572 19.9546 22.3473 20.0381C21.5639 20.6327 20.5883 20.8535 18.637 21.295L16.8606 21.697C9.99394 23.2506 6.56064 24.0274 5.7438 26.6541C4.92696 29.281 7.26757 32.0179 11.9488 37.4918L13.1599 38.908C14.4901 40.4635 15.1552 41.2413 15.4544 42.2036C15.7537 43.1659 15.6531 44.2035 15.452 46.2791L15.2689 48.1685C14.5612 55.4721 14.2073 59.1239 16.3458 60.7472C18.4843 62.3706 21.6989 60.8907 28.1282 57.9304L29.7914 57.1644C31.6183 56.3233 32.5317 55.9028 33.5002 55.9028C34.4686 55.9028 35.382 56.3233 37.2089 57.1644L38.8722 57.9304C45.3014 60.8907 48.516 62.3706 50.6547 60.7472C52.7931 59.1239 52.4391 55.4721 51.7314 48.1685L51.5997 46.809Z" fill="#ACDDA3" stroke="black" stroke-width="0.00256"/>
                        <path opacity="0.5" d="M25.5522 15.0984L24.6374 16.7395C23.6326 18.5421 23.1302 19.4434 22.3468 20.0381C22.4567 19.9546 22.5611 19.8651 22.6622 19.7679C22.4457 21.0561 22.333 22.3795 22.333 23.7292C22.333 36.8344 32.9568 47.4583 46.0623 47.4583C47.9687 47.4583 49.8227 47.2336 51.5993 46.809L51.5479 46.2791C51.3466 44.2035 51.2461 43.1659 51.5454 42.2036C51.8447 41.2413 52.5096 40.4635 53.8399 38.908L55.0512 37.4918C59.7322 32.0179 62.0728 29.2807 61.2559 26.6541C60.4391 24.0274 57.0059 23.2506 50.1392 21.6969L48.3629 21.295C46.4115 20.8535 45.4358 20.6327 44.6525 20.0381C43.8692 19.4434 43.3667 18.5421 42.3619 16.7395L41.4471 15.0984C37.9109 8.75501 36.1429 5.58334 33.4998 5.58334C30.8564 5.58334 29.0884 8.75504 25.5522 15.0984Z" fill="#ACDDA3" stroke="black" stroke-width="0.00256"/>
                    </svg>
                </div>
                <div className='content'>
                    <div className='main-project'>
                        <h3>most recent one.</h3>
                        <div className='image-box'>
                            <a href='https://sahilscorner.netlify.app/' target="_blank" rel="noreferrer"><img src={mostRecentProject} alt='Thumbnail of Recent Project'></img></a>
                        </div>
                        <div className='rectangle'>
                            <p>React.js &#183; Express.js &#183; Node.js &#183; MongoDb</p>
                        </div>
                        <div className='detail'>
                            <h4>Sahil’sCorner - An Ecommerce Website</h4>
                            <p>Ecommerce Web App &#183; Mern Stack Project</p>
                        </div>
                    </div>
                    <hr />
                    <div className='all-projects'>
                        <h3>all projects.</h3>
                            <div className='cards'>
                                <div className='card'>
                                    <div className='image-box'>
                                        <a href='https://sahilscorner.netlify.app/' target="_blank" rel="noreferrer"><img src={mostRecentProject} alt='Thumbnail of Recent Project'></img></a>
                                    </div>
                                    <div className='rectangle'>
                                        <p>React.js &#183; Express.js &#183; Node.js &#183; MongoDb</p>
                                    </div>
                                    <div className='detail'>
                                        <h4>Sahil’sCorner - An Ecommerce Website</h4>
                                        <p>Ecommerce Web App &#183; Mern Stack Project</p>
                                    </div>
                                </div>
                                <div className='card'>
                                    <div className='image-box'>
                                        <a href='https://mohsahil-dot.github.io/tincat/' target="_blank" rel="noreferrer"><img src={tincat} alt='Thumbnail of Recent Project'></img></a>
                                    </div>
                                    <div className='rectangle'>
                                        <p>HTML5 &#183; CSS3 &#183; BootstrapCSS &#183; JavaScript</p>
                                    </div>
                                    <div className='detail'>
                                        <h4>TinCat - A Tinder Clone</h4>
                                        <p>Landing Page</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Project;