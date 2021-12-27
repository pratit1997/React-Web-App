import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import logo from '../../assets/logo.svg';
import './navbar.css';



const Menu=()=>(
    <>
    <p><a href="#cnty">Help Center</a></p>
    <p><a href="#helpCenter">Precautions</a></p>
          <p><a href="#wgpt3">Data</a></p>
          <p><a href="#vaccines">Vaccines</a></p>
          <p><a href="#blog">Blog</a></p>
          
    
    </>
)
const GetVax=()=>(
    <>
    <button  type="button">Get vaccinated !</button>
 
    </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <h1><a href='#home'>Covid-19 </a></h1>
        </div>
        <div className="gpt3__navbar-links_container">
        <Menu/>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
      <button onClick={funGetVac} type="button">Get vaccinated !</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
        <Menu/>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
          <GetVax/>
          <button onClick={funGetVac} type="button">Get vaccinated !</button>
 
          </div>
        </div>
        )}
      </div>
    </div>
  );
  function funGetVac(){
    console.log("clicked");
    window.location.href="https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19/vaccines/how-vaccinated.html";
  }
};

export default Navbar;
