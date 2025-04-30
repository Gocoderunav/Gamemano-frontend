import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './productsSlice';
import filterReducer from "./filterSlice";
// import productDetailSlice from './productDetailSlice';
// import categoriesSlice from './categoriesSlice';
// import authSlice from './authSlice';

export const store = configureStore({
  reducer: {
    products: productsSlice,
    filters: filterReducer,
    // productDetail: productDetailSlice,
    // categories: categoriesSlice,
    // auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
