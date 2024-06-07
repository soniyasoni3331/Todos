import { configureStore } from '@reduxjs/toolkit' //configuring store or creating store
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer 
}) // configureStore method takes an object. 