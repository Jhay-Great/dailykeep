import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


function TodoActivity() {
    const elementStyle = 'w-full h-fit py-3 px-4 bg-slate-500 text-lg'
    const todoActivities = useSelector(state => state.todoItem.value)
    const todo = todoActivities.map(todo => <p className={elementStyle} key={todo.id}>{todo.content}</p>)
  return (
    <div className='flex flex-col gap-1 my-2'>
        {todo}
    </div>
  )
}

export default TodoActivity