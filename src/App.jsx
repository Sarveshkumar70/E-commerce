import React from 'react'
import { useState } from 'react'
import './App.css'
import Home from './Pages/Home.jsx'
import Navbar from './Components/Navbar.jsx'
import {Routes,Route} from 'react-router-dom'
import CartComponent from './Pages/CartComponent.jsx'
import Whislist from './Pages/Whislist.jsx'
import ScrollProgress from './Components/ScrollProgress.jsx'
import Footer from './Components/Footer.jsx'
import LogIn from './Pages/LogIn.jsx'
import SignUp from './Pages/SignUp.jsx'
import SearchProducts from './Components/SearchProducts.jsx'
import ProductDetail from './Pages/ProductDetail.jsx'

function App() {
  
  return (
    <>
    <Navbar/>
    <ScrollProgress />
   <div className='pt-18' ></div>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Cart' element={<CartComponent/>}></Route>
      <Route path='/Whistlist' element={<Whislist/>}></Route>
      <Route path='/LogIn' element={<LogIn/>}></Route>
      <Route path='/SignUP' element={<SignUp/>}></Route>
      <Route path='/SearchProducts' element={<SearchProducts/>}></Route>
      <Route path='/productDetail' element={<ProductDetail/>}></Route>
      {/* <Route path='*' element={<h1>Page not found!</h1>}></Route> */}
    </Routes>
    {/*footer  */}
    <Footer />
    </>
  )
}

export default App
