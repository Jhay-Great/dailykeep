import { useState } from 'react'
import TodoSection from './components/TodoSection'
import TodoActivityForm from './components/TodoActivityForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoActivityForm />
      <TodoSection  />
    </>
  )
}

export default App
