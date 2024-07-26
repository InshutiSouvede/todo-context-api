import { nanoid } from 'nanoid'
import './App.css'
import TodoItem from './components/TodoItem'

function App() {

  return (
    <>
      <h1 className='text-[100px] text-center text-gray-300'>todos</h1>
      <TodoItem name="" id={nanoid()} description="I am Here"/>
    </>
  )
}

export default App
