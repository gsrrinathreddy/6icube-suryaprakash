import React from 'react';

import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';



import './App.css';
import Aboutme from './pages/Aboutme';
import Qualifications from './pages/Qualifications';
import Skills from './pages/Skills';
import Experiences from './pages/Experiences';
import Hobbies from './pages/Hobbies';



function App() {
  return (
    <div className="App">
   
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/Aboutme' element={<Aboutme/>}/>
    <Route path='/Qualifications' element={<Qualifications/>}/>
    <Route path='/Skills' element={<Skills/>}/>
    <Route path='/Experiences' element={<Experiences/>}/>
    <Route path='/Hobbies' element={<Hobbies/>}/>
  </Routes>
  </BrowserRouter>
      
    </div>
  );
}

export default App;
