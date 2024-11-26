import { useState } from 'react'
import AddTodo from './components/AddTodos'
import './App.css'
import Todos from './components/Todos'

function App() {

  return (
    <>
    <div className="bg-gray-700 text-3xl text-white">Learn Readux Toolkit</div>
    <AddTodo />
    <Todos />
    </>
  )
}

export default App

