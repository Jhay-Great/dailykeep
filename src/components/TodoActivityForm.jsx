import React, { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { addTodoItem } from '../features/message/messageSlice'

function TodoActivityForm() {
  const [ content, setContent ] = useState('');
  
  const dispatch = useDispatch();
  const message = useSelector(state  => state.todoItem.value);
  
  
  const onTodoContentChange = e => setContent(e.target.value);
  const addTodo  = (e) => {
    e.preventDefault();

    dispatch(addTodoItem({
      id: nanoid(),
      content,
    }));
    
    // clearing input field
    setContent('');
  };
  
  return (
    <form onSubmit={addTodo} className='w-full h-10 flex gap-8 mb-2'>
        <input 
        type="text" 
        value={content}
        name='todoItem'
        onChange={onTodoContentChange}  
        placeholder='Enter your task for today' 
        className='px-2 text-lg text-white flex-auto placeholder:text-sm ' />

        {/* Button */}
        <Button 
        event={addTodo}
        name='Add' 
        elementStyle='w-fit px-4 bg-blue-400 rounded hover:bg-blue-500 font-bold' />
    </form>
  )
}

export default TodoActivityForm