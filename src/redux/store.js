import { configureStore, createReducer } from "@reduxjs/toolkit";
import productSlice from './slice/productSlice';
import wishSlice from "./slice/wishSlice";
import cartSlice from "./slice/cartSlice";

const productStore=configureStore({
    reducer:{
        productReducer:productSlice, 
        wishReducer:wishSlice,
        cartReducer:cartSlice

    }
})

export default productStore