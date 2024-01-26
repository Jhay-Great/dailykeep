import React from 'react'
import Heading from './Heading'
import TodoActivity from './TodoActivity'

function TodoSection({data}) {
  return (
    <section className='w-96 min-h-52 h-full max-h-96 overflow-y-scroll border rounded bg-slate-700'>
        <Heading heading='Ongoing' />
        <TodoActivity />
    </section>
  )
}

export default TodoSection