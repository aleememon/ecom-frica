import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItemsCount: 0,
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    items: (state) => {
      state.cartItemsCount += 1;
    },
    addToCart: (state, action) => {
      const itemToAdd = action.payload;
      const existingItem = state.cart.find((item) => item.id === itemToAdd.id);

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.cart.push({ ...itemToAdd, qty: 1 });
        // state.cartItemsCount += 1;
      }
    },
    deleteItem: (state, action) => {
      const itemId = action.payload;
      const itemToDelete = state.cart.find((item) => item.id === itemId);

      if (itemToDelete) {
        state.cartItemsCount -= itemToDelete.qty;
        state.cart = state.cart.filter((item) => item.id !== itemId);
      }
    },
    updateItemQuantity: (state, action) => {
      const { id, qty } = action.payload;
      const itemToUpdate = state.cart.find((item) => item.id === id);

      if (itemToUpdate) {
        state.cartItemsCount += qty - itemToUpdate.qty;
        itemToUpdate.qty = qty;
      }
    },
  },
});

export const { items, addToCart, deleteItem, updateItemQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
