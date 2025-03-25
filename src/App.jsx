import React from 'react'
import { useState } from 'react'
import './App.css'
import Home from './Pages/Home.jsx'
import Navbar from './Components/Navbar.jsx'
import {Routes,Route} from 'react-router-dom'
import CartComponent from './Pages/CartComponent.jsx'
import Whislist from './Pages/Whislist.jsx'
import toast from 'react-hot-toast';
import Footer from './Components/Footer.jsx'
import LogIn from './Pages/LogIn.jsx'
import SignUp from './Pages/SignUp.jsx'
import SearchProducts from './Components/SearchProducts.jsx'

function App() {
  
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Cart' element={<CartComponent/>}></Route>
      <Route path='/Whistlist' element={<Whislist/>}></Route>
      <Route path='/LogIn' element={<LogIn/>}></Route>
      <Route path='/SignUP' element={<SignUp/>}></Route>
      <Route path='/SearchProducts' element={<SearchProducts/>}></Route>
    </Routes>
    {/*footer  */}
    <Footer />
    </>
  )
}

export default App
