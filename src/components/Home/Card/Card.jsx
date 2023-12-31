import React from 'react';
import {Link} from "react-router-dom";


import "./Card.css";

const Card = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
  return (
    <>
        <div className='main-card'>
            <div className='container'>
                <div className='card card1'>
                    <div className='card-container'>
                        <div className='card-heading'>
                            <div className='rectangle'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                    <path d="M9.2417 8.8837C8.92355 8.95975 8.59145 9 8.25 9C5.9028 9 4 7.0972 4 4.75001C4 4.50827 4.02018 4.27125 4.05896 4.04053C4.04086 4.05793 4.02216 4.07396 4.00247 4.08891C3.86217 4.19542 3.68743 4.23496 3.33795 4.31403L3.01977 4.38602C1.78993 4.66428 1.17501 4.80341 1.02871 5.27387C0.882411 5.74435 1.30163 6.23455 2.14005 7.21495L2.35696 7.4686C2.59521 7.7472 2.71434 7.8865 2.76793 8.05885C2.82153 8.2312 2.80352 8.41705 2.76749 8.7888L2.7347 9.1272C2.60794 10.4353 2.54456 11.0894 2.92758 11.3801C3.31059 11.6709 3.88634 11.4058 5.03785 10.8756L5.33575 10.7384C5.66295 10.5878 5.82655 10.5125 6 10.5125C6.17345 10.5125 6.33705 10.5878 6.66425 10.7384L6.96215 10.8756C8.11365 11.4058 8.6894 11.6709 9.07245 11.3801C9.45545 11.0894 9.39205 10.4353 9.2653 9.1272L9.2417 8.8837Z" fill="white" stroke="white" stroke-width="0.00256"/>
                                    <path opacity="0.5" d="M4.57658 3.20419L4.41273 3.49812C4.23276 3.82097 4.14278 3.9824 4.00247 4.08891C4.02216 4.07396 4.04086 4.05793 4.05896 4.04052C4.02018 4.27124 4 4.50826 4 4.75C4 7.0972 5.90277 9 8.25002 9C8.59147 9 8.92352 8.95975 9.24172 8.8837L9.23252 8.7888C9.19647 8.41705 9.17847 8.2312 9.23207 8.05885C9.28567 7.8865 9.40477 7.7472 9.64302 7.4686L9.85997 7.21495C10.6984 6.23455 11.1176 5.7443 10.9713 5.27387C10.825 4.80341 10.2101 4.66428 8.98022 4.38601L8.66207 4.31402C8.31257 4.23495 8.13782 4.19542 7.99752 4.08891C7.85722 3.9824 7.76722 3.82097 7.58727 3.49812L7.42342 3.20419C6.79007 2.06806 6.47342 1.5 6.00002 1.5C5.52657 1.5 5.20992 2.06807 4.57658 3.20419Z" fill="white" stroke="white" stroke-width="0.00256"/>
                                </svg>
                            </div>
                            <h3>About me</h3>
                        </div>
                        <div className='card-content'>
                            <p>Embracing life's shadows with a smirk, I'm the artist of my own offbeat journey – scribbles, stumbles, and all</p>
                            <div className='cta-button'>
                                <Link onClick={scrollToTop} to='/about' className='link'>lesss go!!</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card card2'>
                    <div className='card-container'>
                        <div className='card-heading'>
                            <div className='rectangle'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M11.1865 5.94149C11.4644 5.99146 11.6666 6.23335 11.6666 6.51568V7.4846C11.6666 7.76693 11.4644 8.00882 11.1865 8.05879L10.6082 8.16282C10.545 8.35901 10.4649 8.54724 10.3722 8.72807L10.7086 9.21224C10.8698 9.44401 10.8418 9.75804 10.6421 9.95774L9.95703 10.6428C9.75734 10.8425 9.44331 10.8705 9.21153 10.7093L8.72736 10.3727C8.54653 10.4654 8.35831 10.5455 8.16231 10.6087L8.05828 11.187C8.0085 11.4645 7.76661 11.6667 7.48428 11.6667H6.51536C6.23303 11.6667 5.99114 11.4645 5.94117 11.1866L5.83714 10.6083C5.64095 10.5452 5.45272 10.4652 5.27209 10.3723L4.78792 10.7089C4.55614 10.8701 4.24211 10.8421 4.04242 10.6424L3.35739 9.95735C3.1577 9.75765 3.1297 9.44382 3.29089 9.21185L3.62728 8.72768C3.53453 8.54685 3.45442 8.35863 3.39122 8.16243L2.81295 8.0584C2.53547 8.00863 2.33325 7.76674 2.33325 7.4844V6.51549C2.33325 6.23315 2.53547 5.99126 2.81334 5.94129L3.39161 5.83726C3.45481 5.64107 3.53492 5.45285 3.62767 5.27201L3.29128 4.78785C3.13009 4.55607 3.15809 4.24204 3.35778 4.04235L4.04281 3.35732C4.2425 3.15762 4.55653 3.12962 4.78831 3.29082L5.27247 3.6274C5.45331 3.53465 5.64153 3.45454 5.83753 3.39135L5.94156 2.81307C5.99134 2.5356 6.23322 2.33337 6.51556 2.33337H7.48447C7.76681 2.33337 8.0087 2.5356 8.05867 2.81346L8.1627 3.39174C8.35889 3.45493 8.54711 3.53485 8.72775 3.62779L9.21192 3.29121C9.4437 3.13001 9.75772 3.15801 9.95742 3.35771L10.6424 4.04274C10.8421 4.24243 10.8701 4.55626 10.7089 4.78824L10.3726 5.2724C10.4653 5.45324 10.5454 5.64146 10.6086 5.83765L11.1865 5.94149ZM6.99992 8.75004C7.96631 8.75004 8.74992 7.96663 8.74992 7.00004C8.74992 6.03346 7.96631 5.25004 6.99992 5.25004C6.03353 5.25004 5.24992 6.03346 5.24992 7.00004C5.24992 7.96663 6.03353 8.75004 6.99992 8.75004Z" fill="white"/>
                            </svg>
                            </div>
                            <h3>Services</h3>
                        </div>
                        <div className='card-content'>
                            <p>Driven by excellence, our services are meticulously crafted to empower you, ensuring your goals are not just met, but exceeded.</p>
                            <div className='cta-button'>
                                <Link onClick={scrollToTop} to='/service' className='link'>Check now</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card card3'>
                    <div className='card-container'>
                        <div className='card-heading'>
                            <div className='rectangle'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M11.1865 5.94149C11.4644 5.99146 11.6666 6.23335 11.6666 6.51568V7.4846C11.6666 7.76693 11.4644 8.00882 11.1865 8.05879L10.6082 8.16282C10.545 8.35901 10.4649 8.54724 10.3722 8.72807L10.7086 9.21224C10.8698 9.44401 10.8418 9.75804 10.6421 9.95774L9.95703 10.6428C9.75734 10.8425 9.44331 10.8705 9.21153 10.7093L8.72736 10.3727C8.54653 10.4654 8.35831 10.5455 8.16231 10.6087L8.05828 11.187C8.0085 11.4645 7.76661 11.6667 7.48428 11.6667H6.51536C6.23303 11.6667 5.99114 11.4645 5.94117 11.1866L5.83714 10.6083C5.64095 10.5452 5.45272 10.4652 5.27209 10.3723L4.78792 10.7089C4.55614 10.8701 4.24211 10.8421 4.04242 10.6424L3.35739 9.95735C3.1577 9.75765 3.1297 9.44382 3.29089 9.21185L3.62728 8.72768C3.53453 8.54685 3.45442 8.35863 3.39122 8.16243L2.81295 8.0584C2.53547 8.00863 2.33325 7.76674 2.33325 7.4844V6.51549C2.33325 6.23315 2.53547 5.99126 2.81334 5.94129L3.39161 5.83726C3.45481 5.64107 3.53492 5.45285 3.62767 5.27201L3.29128 4.78785C3.13009 4.55607 3.15809 4.24204 3.35778 4.04235L4.04281 3.35732C4.2425 3.15762 4.55653 3.12962 4.78831 3.29082L5.27247 3.6274C5.45331 3.53465 5.64153 3.45454 5.83753 3.39135L5.94156 2.81307C5.99134 2.5356 6.23322 2.33337 6.51556 2.33337H7.48447C7.76681 2.33337 8.0087 2.5356 8.05867 2.81346L8.1627 3.39174C8.35889 3.45493 8.54711 3.53485 8.72775 3.62779L9.21192 3.29121C9.4437 3.13001 9.75772 3.15801 9.95742 3.35771L10.6424 4.04274C10.8421 4.24243 10.8701 4.55626 10.7089 4.78824L10.3726 5.2724C10.4653 5.45324 10.5454 5.64146 10.6086 5.83765L11.1865 5.94149ZM6.99992 8.75004C7.96631 8.75004 8.74992 7.96663 8.74992 7.00004C8.74992 6.03346 7.96631 5.25004 6.99992 5.25004C6.03353 5.25004 5.24992 6.03346 5.24992 7.00004C5.24992 7.96663 6.03353 8.75004 6.99992 8.75004Z" fill="white"/>
                            </svg>
                            </div>
                            <h3>Projects</h3>
                        </div>
                        <div className='card-content'>
                            <p>Venturing through shadows, I weave chaos into art; join me on this carnival of projects, where each creation tells a unique story.</p>
                            <div className='cta-button'>
                                <Link onClick={scrollToTop} to='/project' className='link'>Check now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card;