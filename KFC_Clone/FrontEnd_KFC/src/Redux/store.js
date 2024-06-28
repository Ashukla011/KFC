import { configureStore } from '@reduxjs/toolkit';
import KFCReducer from './KfcDataSlice';

export default configureStore({
  reducer: {
    data: KFCReducer,
  },
});