import { configureStore } from '@reduxjs/toolkit';
import KFCReducer from './KfcDataSlice';
import authReducer from './authSlice';
import cartReducer from './cartSlice';

export default configureStore({
  reducer: {
    data: KFCReducer,
    auth: authReducer,
    cart: cartReducer,
  },
});