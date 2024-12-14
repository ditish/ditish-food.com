/* eslint-disable no-undef */
import { useState } from "react";
import Itemscard from "./Itemscard";
import { CiCircleRemove } from "react-icons/ci";
import { useSelector } from "react-redux"
import { BsCartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const [activecard, Setactivecard] = useState(false)
  const cartItems = useSelector((state) => state.Cart.cart)
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0)
  const totalPrice = cartItems.reduce((totalPrice,item)=> totalPrice+totalQty*item.price,0)
  console.log(cartItems)
  const Navigate=useNavigate()
    
  return <>
    
      <div className={`fixed right-0 top-0 w-full lg:w-[300px] h-full bg-white p-2 ${
        activecard ? "translate-x-0" : "translate-x-full"
      } transition-all duration-500 ease-in-out z-50 `}
    >
      <div className="overflow-y-auto overflow-hidden h-[85%] ">
         <div className="flex justify-between items-center">
         <span className="font-semibold font-" >My Order </span>
         <CiCircleRemove
                 onClick={() => {
                    
            Setactivecard(!activecard);
          
                    
                  }}
  className="text-2xl bg-white rounded-lg hover:bg-red-500 transition-all ease-in-out duration-75"
/>

          </div>
          { cartItems.length > 0?cartItems.map((food) => {
              return <Itemscard key={food.id}
                  id={food.id}
                  name={food.name}
                  price={food.price}
                  rating={food.rating}
                  img={food.img}
                  qty={food.qty}>
                  </Itemscard>
          }):<h2 className="text-3xl items-center text-slate-500 justify-center my-40">Your Cart is Empty.</h2>}
          </div>
          
      <div className="absolute bottom-0 mx-2 mb-2">
        <div className="flex gap-x-4 flex-wrap">
        <h3 className="font-bold">items:{totalQty }</h3>
          <h3 className="font-bold">total items:{totalPrice}</h3>
          </div>
              <hr className="w-[100vw]"></hr>
              <button onClick={()=>{Navigate('/sucess')}} className="bg-green-400 w-[300px] justify-center rounded-lg lg:w-[270px] font-bold hover:text-white hover:scale-90 transition-all   duration-150 ease-in-out p-2 m-1">Check Out</button>
          </div>
          
      </div>
    <BsCartFill onClick={() => {
      Setactivecard(!activecard)
    }} className={`bg-white right-3 bottom-4 rounded-lg p-1 fixed text-4xl hover:scale-110 duration-200 ${totalQty >= 1 && "animate-bounce delay-500 transition-all"}`} />
     
              
   
  </>
}

export default Cart