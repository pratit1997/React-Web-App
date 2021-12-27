import React from 'react';
import './Possibility.css';
const Possibility = () => {
    return (
        <div className="gpt3__possibility section__padding" id="vaccines">
    <div className="gpt3__possibility-image">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/zoHOigIp94Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowFullScreen"></iframe>
    {/* <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/7DlcRSvuvnw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen="allowfullscreen"></iframe> */}
    </div>
    <div className="gpt3__possibility-content">
      {/* <h4>Request Early Access to Get Started</h4> */}
      <h1 className="gradient__text"> How do vaccines work?  </h1>
      <p>Vaccines protect us against deadly diseases. Vaccines are a safe and clever way to
keep us healthy, safe and strong. Learn more about how #VaccinesWork. 

#VaccinesWork for all is a campaign of the World Health Organization for the World
Immunization Week.  
</p>
      <h4><a href='https://www.who.int/' rel="noopener noreferrer" target="_blank">World Health Organization (WHO)</a></h4>
    </div>
  </div>
    )
}

export default Possibility
