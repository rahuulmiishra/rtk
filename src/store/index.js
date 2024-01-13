

import { configureStore } from '@reduxjs/toolkit';

import inputSlice from './slices/inputSlice';
import todoSlice from './slices/todoSlice';

const store = configureStore({reducer: {
    inputSlice,
    todoSlice
}});

export default store;

