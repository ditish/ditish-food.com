/* eslint-disable no-undef */

/* eslint-disable react/prop-types */

import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromcart, incrementQty, decrementqty } from "../../redux/Slices/Cartslices";
import toast from 'react-hot-toast';

const Itemscard = ({ id,name, img, price, qty }) => {
  const dispatch = useDispatch();
  return (
    <>
    <div className=" items-center h-[110px] shadow-md justify-between p-3 m-2 border-b rounded-lg bg-slate-300 border-gray-200   ">
      
      <div className="flex items-center  ">
        <img
          className="w-[50px] h-[50px] rounded-lg"
          src={img}
              />
              <div className="justify-between">
          <span className="text-lg font-medium">{name }</span>
          <MdOutlineDelete onClick={() => {
            dispatch(removeFromcart({ id }))
            toast(`${name} Deleted`, {
              icon: '👋',
            });
                  }} className="text-gray-500 hover:scale-125 cursor-pointer  hover:text-red-500 transition-all duration-150" size={20} />
                  </div>
      </div>

      
      <div className="flex items-center m-0 justify-between">
        <span className="text-green-600 font-semibold">₹{ price}</span>
        <div className="flex items-center space-x-2">
          <IoMdAddCircleOutline onClick={()=>qty>=1?(dispatch(incrementQty({id}))):qty=0} className="text-green-500 rounded-lg cursor-pointer hover:scale-90 hover:bg-green-300" size={20} />
          <span className="text-lg font-semibold">{qty }</span>
          <IoMdRemoveCircleOutline  onClick={()=>qty>1?(dispatch(decrementqty({id}))):qty=0}className="text-red-500 cursor-pointer rounded-lg hover:scale-90 hover:bg-red-400 " size={20} />
        </div>
      </div>
    </div>
 </> )
};

export default Itemscard;
