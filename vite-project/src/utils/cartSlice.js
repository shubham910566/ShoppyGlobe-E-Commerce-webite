import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Array to store cart items
  },
  reducers: {
    addToCart: (state, action) => {
      // Check if item already exists in cart
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity
      } else {
        state.items.push(action.payload); // Add new item
      }
    },
    removeFromCart: (state, action) => {
      // Remove item by filtering out the matching ID
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;