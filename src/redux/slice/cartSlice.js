import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name :'cart',
    initialState:{
        cart:[]
    },
    reducers :{
        addTocart(state,action){
            const existing=state.cart.find(item=>item.id==action.payload.id)
            if(existing){
                existing.quantitiy+=1

            }
            else{
                let prod=action.payload
                prod={...prod,quantity:1}
                state.cart.push(prod)
            }
            alert("product added to cart")
        },
        removeFromCart(state,action){
            state.cart=state.cart.filter(item=>item.id!=action.payload)
            alert("product removed")
        },
        increase(state,action){
            const existing=state.cart.find(item=>item.id==action.payload)
            existing.quantity++
        },
        decrease(state,action){
            const existing=state.cart.find(item=>item.id==action.payload)
            if(existing.quantity==1){
                state.cart=state.cart.filter(item=>item.id!=action.payload)
                alert("Product Removed From Cart!!")
            }
            else{
                existing.quantity--
            }
        },
        checkout(state){
            state.cart=[]
        }
    }
})
export default cartSlice.reducer
export const {addTocart,removeFromCart,increase,decrease,checkout}=cartSlice.actions