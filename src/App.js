import React from 'react'

import {About,Footer,Header,Skills,Project} from './container';

import { Navbar } from './components';

import './App.scss'

const App = () => {
  return (
    <div className='app'>
        <Navbar/>
        <Header/>
        <About/>

         <Skills/>
        <Project/>
       
        {/* <Tesitimonials/> */}
        <Footer/>
    </div>

    


  )
}



export default App;