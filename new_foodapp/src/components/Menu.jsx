
import { useEffect, useState } from "react"
import FoodData from "../FoodData";
import{ useDispatch,  useSelector } from 'react-redux'
import { setcategory } from "../../redux/Slices/Categoryslice";


const Menu = () => {
  const [categoris, Setcategories] = useState([]);
  const listofUniquecategories = () => {
    const uniquecategories = [...new Set(FoodData.map((food) => food.category
    )),];
    Setcategories(uniquecategories);
    
  }
  useEffect(() => {
    listofUniquecategories();
  }, [])
  const dispatch = useDispatch();
  const SelectedCategory = useSelector((state) => state.category.category)
  console.log(SelectedCategory);
  return (
      <>
         
          <div className=" inline-block text-gray-400  m-2 hover:font-semibold transition-all">find all the items</div>
          <div className="flex overflow-x-scroll m-2 scroll-smooth lg:overflow-x-hidden">
        <button onClick={()=>dispatch(setcategory('ALL'))} className={`"mx-2 px-3 py-1 bg-gray-300 rounded-md hover:bg-green-400 hover:text-white transition-all ease-in-out)"${SelectedCategory==='ALL' && "bg-green-400 "}`}>All</button>
        {categoris.map((category, index) => {
          return (
            <button
              key={index } onClick={() => {
              dispatch(setcategory(category))
              }} className={`mx-2 px-3 py-1 bg-gray-300 rounded-md hover:bg-green-400 hover:text-white transition-all ease-in-out ${SelectedCategory===category && "bg-green-400 text-white"}`}>{category }</button>
            
          )
        })}
    </div>
             
      </>
  )
}

export default Menu;