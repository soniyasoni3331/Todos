import React, { useState } from 'react'
import {useDispatch} from 'react-redux' 
import { addTodo } from '../features/todo/todoSlice'
 
function AddTodo() {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const addTodoHandler = (e) =>{
        e.preventDefault()
        dispatch(addTodo(input)) // dispatch reducer ko use krte hue store me value add krta h
        setInput('')
    }
  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-[#FFFFFF] rounded focus:ring-2 focus:ring-black text-base outline-none text-[#735E59] py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-[#735E59] bg-transparent border border-[#735E59] py-2 px-6 focus:outline-none hover:bg-[#735E59] rounded text-lg hover:text-[#FFFFFF]"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo