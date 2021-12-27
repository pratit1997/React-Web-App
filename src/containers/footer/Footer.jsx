import React from 'react';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import web from '../../assets/web.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      {/* <h1 className="gradient__text">Do you want to step in to the future before others</h1> */}
    </div>

   

    <div className="gpt3__footer-links">
      <div className="gpt3__navbar-links_logo2">
      <h1><a href='#home'>Covid-19 </a></h1>
      </div>
    </div>
    <div className='footer_logo'>
        <div >
      <a href='https://github.com/pratit1997'><img src={github} alt="Github" /> </a>
      </div>
      <div >
      <a href='https://www.linkedin.com/in/pratit-patel/#'><img src={linkedin} alt="Linkedin" /> </a>
      </div>
      <div >
      <a href='https://www.pratit.tech/'><img src={web} alt="Pratit.tech" /></a>
      </div>
      </div>
    <div className="gpt3__footer-copyright">
      <p>@2021 pratit patel All rights reserved.</p>
    </div>
  </div>
    )
}

export default Footer
