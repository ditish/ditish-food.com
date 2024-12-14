
/* eslint-disable react/prop-types */

import { FaStar } from "react-icons/fa";
import {useDispatch} from "react-redux"
import { addtoCart } from "../../redux/Slices/Cartslices";

const Foodcard = ({ id, name, img, rating, desc, price ,handleToast}) => {
  const dispatch = useDispatch();
  
 
  return (<>
    
      <div className="w-[250px] rounded-md bg-white m-2 p-1 ">
          <img className=" hover:scale-90 transition-all duration-100  ease-in-out p-2 w-auto h-[130px] cursor-grab" src={img} alt="" />

          <div className="flex justify-between m-1"> 
              <div className="font-semibold">{ name }</div>
              <span className="text-green-400 font-semibold">₹{ price}</span>
              
          </div>
          <p className="m-1 text-sm">{desc.slice(0,50 )}... </p>
          <div className=" m-1 flex justify-between items-center">
              <span className="flex items-center font-semibold"><FaStar className="text-yellow-400" />{ rating}</span>
        <button onClick={() => {
          dispatch(addtoCart({ id, name, price, rating,  img, qty: 1 },handleToast(name)))
              }} className=" bg-green-400 p-1 rounded-lg hover:scale-95 font-normal text-white w-auto">Add to Card</button>
          </div>
    </div>
  </>)
}

export default Foodcard