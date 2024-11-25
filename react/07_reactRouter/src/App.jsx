import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Home /> */}
    <Header />
    <Footer />
    <h1 className='text-3xl bg-red-700 text-white'>yashawant</h1>
    </>
  )
}

export default App
