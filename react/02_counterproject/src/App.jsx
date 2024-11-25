import { useState } from 'react';
import './App.css'

// function App() {

// let [counter,setCounter]=useState(15)

    
//  const  addValue = () => {
//     setCounter(Precounter => Precounter + 1)
//     setCounter(Precounter => Precounter + 1)
//     setCounter(Precounter => Precounter + 1)
//     setCounter(Precounter => Precounter + 1)
//   }
//   // setCounter(counter + 1)
//     const removeValue = () =>{
//         setCounter(Precounter => Precounter - 1)
//         setCounter(Precounter => Precounter - 1)
    
//     }
//   return (
//     <>
//     <h1>Chai Our Code</h1>
//     <h2>Counter Value: {counter}</h2>
//     <button onClick={addValue}>Incrise Value</button>
//     <br />
//     <button onClick={removeValue}>Decrise value</button>

//     <br />
//     </>
//   )



  function App() {

    let [counter,setCounter]=useState(0)
    
        
     const  addValue = () => {
      if (counter == 20){
        setCounter(counter = 20)
      }
      else{
        setCounter(counter+1)
      }
      // setCounter(counter + 1)
        }
        const removeValue = () =>{
          if (counter > 0){
            setCounter(counter - 1)
          }
          else{
            setCounter(counter = 0)
          }
        }
      return (
        <>
        <h1>Chai Our Code</h1>
        <h2>Counter Value: {counter}</h2>
        <button onClick={addValue}>Incrise Value</button>
        <br />
        <button onClick={removeValue}>Decrise value</button>
    
        <br />
        <p>hydration : Jab pehli baar page load hota hai, buttons aur images dikhte hain (HTML aa gaya), lekin kuch click nahi hota kyunki JavaScript ab tak load nahi hui hoti. Phir jab JavaScript load ho ke React ko HTML ke saath connect karti hai aur sab interactive ho jata hai, us process ko hydration bolte hain. aur ye fibre algorithm k through kaafi aachi hoti haiC</p>
        </>
      )
}

export default App
