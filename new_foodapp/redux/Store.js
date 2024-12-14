import { configureStore } from "@reduxjs/toolkit";
import Cartslices from "./Slices/Cartslices"
import Categoryslice from "./Slices/Categoryslice.jsx"
import SearchSlice from "./Slices/Searchslice.jsx";
const store = configureStore({
    reducer: {
        Cart: Cartslices,
        category: Categoryslice,
        search:SearchSlice,
    },
})
export default store;