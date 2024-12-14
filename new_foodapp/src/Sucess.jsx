
import { useEffect, useState } from "react"
import{SyncLoader} from "react-spinners"
const Sucess = () => {
  const [loader, setloader] = useState('true')
  useEffect(
    () => {
      setTimeout(() => {
        setloader(false)
        
      }, 2000);
    },[]
  )
  return (<>
    <div className="flex flex-col items-center justify-center h-screen">
      {loader?<SyncLoader color="green"/> :  <><div className="text-3xl font-semibold ">THANK YOU 😊</div><h3 className="text-semibold">your order has been sucessfully completed ✅</h3></>}
      </div>
    
  </>
  )
}

export default Sucess;