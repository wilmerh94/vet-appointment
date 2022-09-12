import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   patients: [],
};

export const userData = createSlice({
   name: 'userData',
   initialState,
   reducers: {
      clearBasket: (state) => {
         state.items = [];
      },
      addToDataBase: (state, action) => {
         state.patients = [...state.patients, action.payload];
         // const basketItem = state.items.find((item) => item.id === action.payload.id);
         // if (!basketItem) {
         //    state.items = [...state.items, action.payload];
         // }
      },
      removeFromDataBase: (state, action) => {
         const basketItem = state.items.findIndex((item) => item.id === action.payload);
         let newBasket = [...state.items];
         if (basketItem >= 0) {
            newBasket.splice(basketItem, 1);
         } else {
            console.log('error');
         }
         state.items = newBasket;
      },
   },
});

// Action creators are generated for each case reducer function
export const { clearBasket, addToDataBase, removeFromDataBase } = userData.actions;
export const selectBasketItems = (state) => state.basket.items;
export const selectBasketItemId = (state, id) =>
   state.basket.items.filter((item) => item.id === id);

export default userData.reducer;
