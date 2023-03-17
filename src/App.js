import React from 'react';
import Asosiy from './Companents/Asosiy/Asosiy';
import Footer from './Companents/Footer/Footer';
// import Login from './Companents/Login/Login';
import Navbarde from './Companents/Navbarde/Navbarde';
// import Peoples from './Companents/Peoples/Peoples';
// import Started from './Companents/Started/Started';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Style/Style.css'
import Login from './Companents/Login/Login';
import Signup from './Companents/Signup/Signup';
import About from './Companents/About/About';

function App() {
  return (
    <BrowserRouter>
      <Navbarde/>
        <Routes>
          <Route path='/' element={<Asosiy/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
          <Route path='about' element={<About/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;