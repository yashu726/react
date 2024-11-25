import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

function MyApp() {

  return (
    <>
     <h1>Hello Vite + React | YK</h1>
    </>
  )
}

const customElement = (
  <a href="https://google.com" target = "_blank">visit google</a>
)
// const reactElement = {
//   type : 'a',
//   props: {
//       href: 'https://google.com',
//       target : 'blank'
//   },
//   Children: 'click me to visit google'
// }

const anotherElement = React.createElement(
  'a',
  {href: "https://google.com",target: "_blank"},
  'click me to google'
)

createRoot(document.getElementById('root')).render(
 
  //  MyApp()
  // customElement
  // anotherElement
  <App /> 
 
)
