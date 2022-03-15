import React from 'react'

import {About,Footer,Header,Skills,Tesitimonials,Work} from './container';

import { Navbar } from './components';

import './App.scss'

const App = () => {
  return (
    <div className='app'>
        <Navbar/>
        <Header/>
        <About/>
        <Work/>
        <Skills/>
        <Tesitimonials/>
        <Footer/>
    </div>

    


  )
}



export default App;