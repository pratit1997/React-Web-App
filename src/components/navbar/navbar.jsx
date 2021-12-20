    import React from 'react';
    import './navbar.css';
    // import{ RiMenu3Line,RiCloseLin} from 'react-icon';
    import logo from '../../assets/logo.svg';
    const navbar = () => {
        // console.log("demo");
        return (
            <div className='gpt__navbar'>
               <div className='gpt__navbar-links'></div>
               <div className='gpt__navbar-links_logo'>
               <div className="gpt3__navbar-links_container">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#wgpt3">What is GPT3?</a></p>
                    <p><a href="#possibility">Open AI</a></p>
                    <p><a href="#features">Case Studies</a></p>
                    <p><a href="#blog">Library</a></p>
                    </div>    
               </div>
            </div>
        )
    }
    
    export default navbar
    