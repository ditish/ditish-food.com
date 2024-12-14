/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


const Protectedroute = ({element}) => {
    const cartItems=useSelector((state)=>state.Cart.cart)
    return cartItems.length > 0 ? element : <Navigate to ='/'></Navigate>
    
 
}

export default Protectedroute