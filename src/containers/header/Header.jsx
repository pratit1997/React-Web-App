import React from 'react';
import covid from '../../assets/covid19.png';
// import ai from '../../assets/ai.png';
import './Header.css';


const Person=()=>(
    <>
     <h1 className="gradient__text">Justin Trudeau</h1>
          <p>Let&apos;s face it. The best way for us to grow the economy and, in turn, make your life more affordable is by finishing the fight against COVID-19. And the best way to do that is by getting the job done on vaccines. So that’s what we’re going to do. And everyone has a role to play.</p>
    </>
)
const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
          
          <Person/>

    
        </div>
    
        <div className="gpt3__header-image">
          <img src={covid}  alt="COVID-19" />
        </div>
      </div>
    )
}

export default Header
