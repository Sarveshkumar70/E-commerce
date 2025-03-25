import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter } from 'react-router-dom'
import CartContextComponent from './Components/CartContextComponent.jsx'
import ProductContext from './Context/ProductContext.jsx'
import { Toaster } from 'react-hot-toast';
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductContext>
    <CartContextComponent>
    <BrowserRouter>
    <App /> 
    <Toaster/>
    </BrowserRouter>
    </CartContextComponent>
    </ProductContext>
  </StrictMode>,
)
