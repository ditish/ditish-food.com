import { useDispatch } from "react-redux";
import { setsearch } from "../../redux/Slices/Searchslice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <>
      <nav className="flex flex-col lg:flex-row justify-between bg-slate-500 items-center">
              <div className="p-3">
                  
          <h3 className="text-white-700 text-2xl">
            {new Date().toUTCString().slice(0, 16)}
                  </h3>
                  <h1 className="font-bold text-3xl hover:text-gray-300 transition-all">DITISH FOOD</h1></div>
        
              <div className="p-4" >
              <input onChange={(e)=>{dispatch(setsearch(e.target.value))}}  className=" lg:w-80 border-white-600 hover:scale-95 duration-500 outline-none rounded-md text-sm p-3 cursor-pointer"type="input" name="search" id="" placeholder="search here" autoComplete="on"></input>    
                 
                  </div>
      </nav>
    </>
  );
};

export default Navbar;
