import { createSlice } from "@reduxjs/toolkit";
const Cartslice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    }, reducers: {
        addtoCart: (state, action) => { 
            const existingItem = state.cart.find((item) => item.id === action.payload.id)
            if (existingItem) {
                 state.cart=state.cart.map((item)=>item.id===action.payload.id?{...item,qty:item.qty+1}:item)
            }
            else{state.cart.push(action.payload);}
            
        },
        removeFromcart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id)
        },
        incrementQty: (state, action) => {
            state.cart=state.cart.map((item)=>item.id===action.payload.id?{...item,qty:item.qty+1}:item)
        },
        decrementqty: (state, action) => {
            state.cart=state.cart.map((item)=>item.id===action.payload.id?{...item,qty:item.qty-1}:item)
        }
    }
});
export const { addtoCart, removeFromcart ,incrementQty,decrementqty } = Cartslice.actions;
export default Cartslice.reducer