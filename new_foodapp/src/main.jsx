import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import App from './App.jsx'
import Sucess from './Sucess.jsx'
 import{Provider} from "react-redux"
import store from '../redux/Store.js'
import Protectedroute from './components/Protectedroute.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/sucess' element={<Protectedroute element={<Sucess/>}/>}/>
    </Routes>
      </BrowserRouter>
      </Provider>
    
  </StrictMode>,
)
