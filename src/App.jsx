import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <>
      <h1 className='text-4xl text-[#423F32] font-bold p-2 mt-6'>Todos</h1>
      <p className='text-sm text-[#8B6C50] italic'>Manage your todos efficiently</p>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App