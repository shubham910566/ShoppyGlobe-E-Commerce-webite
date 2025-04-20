import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice"
import searchSlice from "./searchSlice";

// Configure Redux store with cart and search reducers
const appStore = configureStore({
    reducer: {
        cart: cartSlice,
        search: searchSlice,
    },
});

export default appStore