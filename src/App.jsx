import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import View from './Pages/View'
import Wish from './Pages/Wish'
import { Routes,Route} from 'react-router-dom'
import Header from './Components/Header'
import Cart from './Pages/Cart'
import './bootstrap.min (1).css'
function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/view/:id' element={<View/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wish' element={<Wish/>}/>
    </Routes>

    </>
  )
}

export default App
