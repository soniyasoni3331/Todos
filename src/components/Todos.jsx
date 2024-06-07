import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const [editingTodo, setEditingTodo] = useState(null);
    const [editText, setEditText] = useState('');

    const handleEditTodo = (todo) => {
      setEditingTodo(todo);
      setEditText(todo.text);
  };
    const handleUpdateTodo = () =>{
      dispatch(updateTodo({id: editingTodo.id, text: editText }))
      setEditingTodo(null);
      setEditText("");
    }
  return (
    <div className='w-[80%] m-auto relative'>
        <div className='text-2xl text-[#423F32] font-bold p-2 mt-6'>Tasks to do</div>
          <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-[#FFFFFF] px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-[#735E59]'>{todo.text}</div>
            <div className=""><button
             onClick={() => handleEditTodo(todo)}
              className="text-white bg-[#735E59] border-0 py-1 px-4 focus:outline-none hover:bg-[#423F32] rounded text-md mx-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 16"
                strokeWidth={0.8}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"
                />
              </svg>
            </button>
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-[#735E59] border-0 py-1 px-4 focus:outline-none hover:bg-[#423F32] rounded text-md mx-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button></div>
          </li>
        ))}
      </ul>
      {editingTodo && (
         <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm flex flex-col justify-evenly'>
                <div className='w-80 h-80 bg-[#FFFFFF] p-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md '>
                    <h2 className='text-4xl text-[#423F32] font-bold p-2 m-4'>Edit Todo</h2>
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className='bg-[#FFFFFF] rounded focus:ring-2 focus:ring-black text-lg text-[#735E59] py-2 px-3 leading-8 transition-colors duration-200 ease-in-out text-center my-6'
                    />
                   
                    <button className='bg-[#735E59] text-[#FFFFFF] border m-5 border-[#735E59] py-2 px-6 focus:outline-none rounded text-lg hover:scale-105 duration-200 font-bold ' 
                    onClick={handleUpdateTodo}>Update Todo</button>
                </div>
              </div>
            )}
    </div>
  )
}

export default Todos