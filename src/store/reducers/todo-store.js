import { createSlice } from "@reduxjs/toolkit";


const TodoStore = createSlice({
    name: "Todo",
    initialState: {
       todos: []
    },
    reducers: {
       add: (state, action) => {
          state.todos.push(action.payload);
       },
       deleteTodo: (state,action) => {
          let index= state.todos.findIndex(i => i.id === action.payload.id);
          state.todos.splice(index,1);
       },
       update: (state, action) => {
         let index = state.todos.findIndex(i => i.id === action.payload[0]);
         state.todos[index] = action.payload[1];
       }
    }
})

export const TodoReducer = TodoStore.reducer;
export const {add,deleteTodo,update} = TodoStore.actions;
export const TodoList = (state) => state.TodoReducer.todos;
