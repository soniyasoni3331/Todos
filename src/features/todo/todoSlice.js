import { createSlice,nanoid } from "@reduxjs/toolkit"; // nanoid method for generating unique id 
import { useState } from "react";

// creating initial state - 
const initialState = {
    todos: [{
        id: 1, text: "Hello world"
    }]
}
//creating slice-
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: { //in reducer we are defining properties and functions
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
        },  //in this function we will always have two values
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        updateTodo: (state, action)=>{
            // const [text, setText] = useState("")
            state.todos = state.todos.map((todo)=>{ 
                (todo.id === action.payload.id)?{...todo,text: action.payload.text}: todo
            })
                 
        }
    }
})//we can name slices 

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer