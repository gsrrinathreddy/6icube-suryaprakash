import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Hotstar from './pages/Hotstar';
import Prime from './pages/Prime';
import Netflix from './pages/Netflix';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = "Hotstar" element ={<Hotstar/>}/>
        <Route path = "Prime" element ={<Prime/>}/>
        <Route path = "Nexflix" element ={<Netflix/>}/>


      </Routes>
      
      
      
      
      </BrowserRouter>
   
    </div>
  );
}

export default App;
