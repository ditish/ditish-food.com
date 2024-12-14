import { useSelector } from "react-redux";
import FoodData from "../FoodData"
import Foodcard from "./Foodcard"
import toast, { Toaster } from 'react-hot-toast';
const Fooditems = () => {
    const handleToast = (name) => toast.success(`Added ${name}`);
    const category = useSelector((state) => state.category.category)
    const search = useSelector((state)=> state.search.search)
    return <>
        <Toaster
            
  position="top-center"
  reverseOrder={false}
/>
        <div className="flex flex-wrap justify-center m-6 lg:justify-normal gap-10">
            {
                FoodData.filter((food) => {
                    if (category === 'ALL') {
                        return food.name.toLowerCase().includes(search.toLowerCase());
                    }
                    else {
                        return category === food.category && food.name.toLowerCase().includes(search.toLowerCase());
                    }
                }).map((food) =>
                {
                     return <Foodcard key={food.id} id={food.id } name={food.name} img={food.img} price={food.price} rating={food.rating} desc={food.desc} handleToast={handleToast} />
                }
                )
        }
        </div>
       
    
    </>
    
}

export default Fooditems