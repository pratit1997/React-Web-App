import React from 'react';
import {Footer,Blog,Possibility,HelpCenter,Header,Data } from './containers';
import {NavBar,Country} from './components';
import './App.css';

const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <NavBar/>
                <Header/>
            </div>
            <Country/>
            <HelpCenter/>
           <Data/>
            <Possibility/>
            
            {/* <Blog/> */}
            <Footer/>
          
        </div>
    )
}

export default App
