import React from 'react'
import { Route, Routes } from 'react-router-dom'
import home from './pages/home'
import services from './pages/services'
import about from './pages/about'
import contact from './pages/contact'
import product from './pages/product'
import cart from './pages/cart'
import placeOrder from './pages/placeOrder'
import Navbar from './components/Navbar/assets'


const App = () => {
  return (
    
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>

      <Routes>
      
        <Route path='/' element={<home/>} />
        <Route path='/services' element={<services/>} />
        <Routes path='/about' element={<about/>} />
        <Route path='/contact' element={<contact/>} />
        <Route path='/product/:producId' element={<product/>} />
        <Route path='/cart' element={<cart/>} />
        <Route path='/login' element={<login/>} />
        <Route path='placeoder' element={<placeOrder/>}/>
        <Route path='/order' element={<Order/>} />




         
      </Routes>

    </div>
    
  )
}

export default App