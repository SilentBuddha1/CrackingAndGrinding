import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../Features/todo/todoSlices';

export const store = configureStore({
    reducer: todoReducer,
});