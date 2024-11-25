import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)
  const myobj = {
    name:'yash',
    age: 21
  }
  let myArry = [1,2,3,4,5]
  return (
    <>
    <h1 className='bg-black text-white p-4 rounded-xl'>Tailwind test</h1>
    <br />
    <Card username= "yashu" someobj = {myobj} newArry = {myArry} btnText="view More"/>
    <Card username="dheqhbqj" btnText="click me"/>
    <Card username="idhehdq" btnText="visit me"/>
    <Card username="idhehdq" />
    </>
  )
}

export default App
