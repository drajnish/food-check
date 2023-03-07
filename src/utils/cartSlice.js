import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    items: [],
    totalItemsCount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const item = state.items[action.payload.id];
      const quantity =
        item && item.hasOwnProperty('quantity')
          ? state.items[action.payload.id]?.quantity + 1
          : 1;
      state.items[action.payload.id] = { ...action.payload, quantity };
      state.totalItemsCount = state.totalItemsCount + 1;
    },
    removeItem: (state, action) => {
      state.items.pop(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalItemsCount = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
