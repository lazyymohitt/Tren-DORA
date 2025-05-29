
import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Cart from './Pages/Cart'
import Collection from "./Pages/Collection"
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Orders from './Pages/Orders'
import PlaceOrder from './Pages/PlaceOrder'
import Product from './Pages/Product'
import Navbar from './components/nAVBAR.JSX'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]' >
      <Navbar/> 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/collection' element ={<Collection/>}/>
      <Route  path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='placeorder' element={<PlaceOrder/>}/>
      <Route path='/product/:productId' element={<Product/>}/>
    </Routes>

    </div>
  )
}

export default App