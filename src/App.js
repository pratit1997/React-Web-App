import React from 'react';
import {Footer,Blog,Possibility,Features,GPT,Header } from './containers';
import {NavBar,Cta,Brand} from './components';
import './App.css';

const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <NavBar/>
                <Header/>
            </div>
            <Brand/>
            <GPT/>
            <Features/>
            <Possibility/>
            <Cta/>
            <Blog/>
            <Footer/>
          
        </div>
    )
}

export default App
