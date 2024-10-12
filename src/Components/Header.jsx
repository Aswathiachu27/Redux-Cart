import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { search } from '../redux/slice/productSlice';

function Header() {

const [key,setKey]=useState("")
const dispatch=useDispatch()
const searchWithKey=()=>{
  dispatch(search(key))
}

const {wishlist}=useSelector((state)=>state.wishReducer)
const{cart}= useSelector((state)=>state.cartReducer)

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <i class="fa-solid fa-store" style={{color: "#FFD43B;"}}></i>
            {' '}
            Redux Cart
          </Navbar.Brand>
          <div className='d-flex'>
            <div className='d-flex'>
              <input type="text"placeholder='search' className='form-control me-2' onChange={(e)=>setKey(e.target.value)} />
              <button className='btn btn-success me-2' onClick={searchWithKey}>search</button>
            </div>
          <Link to={'./wish'} className='btn btn-outline-dark mx-2 ' >
          <i class="fa-solid fa-heart" style={{color:  "#FFD43B;"}}></i>
            </Link>
            {' '}
            Wishlist
            <span className='badge bg-dark me-4'>
              {wishlist?.length}
            </span>
            
           


            <Link to={'./cart'} className='btn btn-outline-dark mx-2' >
            <i class="fa-solid fa-cart-shopping " style={{color: "#FFD43B;"}}></i>

            </Link>
            {' '}
            Cart
            <span className='badge bg-dark ms-4'>
              {cart?.length}
            </span>

          </div>
        </Container>
       
      </Navbar>
    </>
  )
}

export default Header