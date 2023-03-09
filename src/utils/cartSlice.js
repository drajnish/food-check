import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    items: [],
    totalItemsCount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity = existingItem.quantity + 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      state.totalItemsCount = state.totalItemsCount + 1;
    },

    removeItem: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem.quantity > 1) {
        existingItem.quantity = existingItem.quantity - 1;
      } else {
        state.items.splice(state.items.indexOf(existingItem), 1);
      }
      state.totalItemsCount = state.totalItemsCount - 1;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalItemsCount = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
