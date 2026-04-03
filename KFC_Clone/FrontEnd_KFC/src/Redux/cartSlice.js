import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3500/cartApi';

export const fetchCart = createAsyncThunk('cart/fetchCart', async (_, { getState }) => {
  const { auth } = getState();
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${auth.token}` }
  });
  return response.data;
});

export const addToCart = createAsyncThunk('cart/addToCart', async ({ foodId, quantity }, { getState }) => {
  const { auth } = getState();
  const response = await axios.post(API_URL, { foodId, quantity }, {
    headers: { Authorization: `Bearer ${auth.token}` }
  });
  return response.data;
});

export const updateCartQuantity = createAsyncThunk('cart/updateQuantity', async ({ foodId, quantity }, { getState }) => {
  const { auth } = getState();
  const response = await axios.put(`${API_URL}/${foodId}`, { quantity }, {
    headers: { Authorization: `Bearer ${auth.token}` }
  });
  return response.data;
});

export const removeFromCart = createAsyncThunk('cart/removeFromCart', async (foodId, { getState }) => {
  const { auth } = getState();
  const response = await axios.delete(`${API_URL}/${foodId}`, {
    headers: { Authorization: `Bearer ${auth.token}` }
  });
  return response.data;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalPrice: 0,
    loading: false,
    error: null,
  },
  reducers: {
    clearCartState: (state) => {
      state.items = [];
      state.totalPrice = 0;
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => { state.loading = true; }
      )
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        (state, action) => {
          state.loading = false;
          state.items = action.payload.items || [];
          state.totalPrice = action.payload.totalPrice || 0;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        }
      );
  },
});

export const { clearCartState } = cartSlice.actions;
export default cartSlice.reducer;
