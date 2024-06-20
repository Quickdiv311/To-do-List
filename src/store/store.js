import { configureStore } from "@reduxjs/toolkit";
import {TodoReducer} from './reducers/todo-store';

export const store = configureStore({
    reducer: {
        TodoReducer
    }
})