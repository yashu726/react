import React, { useCallback, useEffect, useRef, useState } from 'react';


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false) 
  const [charAllowed, setCharAllowed] = useState(false) 
  const [password, setPassword] = useState("")
  const [copySuccess, setCopySuccess] = useState("");

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += '1234567890'
    if(charAllowed) str += "!@#$%^&*()-_+={}[]" 
    
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
     }
     setPassword(pass)
     console.log(pass);
  },[length, numberAllowed, charAllowed, setPassword])

  const copayPasswordClipboard = useCallback(()=>{
    passwordRef.current?.select(password)
    // passwordRef.current?.setSelectionRange(0,3)
    try {
   window.navigator.clipboard.writeText(password)
       console.log("Copy success");
       setCopySuccess(" copied!");
       setTimeout(() => setCopySuccess(""), 2000);
     } catch (error) {
      console.error("Failed to copy:", error);
      setCopySuccess("Failed to copy password.");
      setTimeout(() => setCopySuccess(""), 2000);
     }
  },[password])
  // const copayPasswordClipboard = useCallback(async () => {
  //   passwordRef.current?.select();
  //   passwordRef.current?.setSelectionRange(0, 3);
  
  //   try {
  //     await window.navigator.clipboard.writeText(password);
      
  //     // On success, log or show a success message
  //     console.log("Copy success");
  //     // Or use alert to display a message to the user
  //     alert("Password copied to clipboard!");
  //   } catch (error) {
  //     // If there's an error, log it
  //     console.error("Failed to copy: ", error);
  //   }
  // }, [password]);

  useEffect(()=>{
  passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])
   
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
      <h1 className='text-white text-center my-3'>Password generator</h1>
        {copySuccess && <div className="toast"> ✓{copySuccess}</div>}
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type='text' 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          ref={passwordRef}
          readOnly
         />
         <button onClick={copayPasswordClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className="flex text-sm gap-x-3">
        <div className="flex items-center gap-x-1">
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>length: {length} </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={()=>{
            setNumberAllowed((prev) => !prev)
          }}
          />
          <label htmlFor="numberInput">Number</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={charAllowed}
          id='charInput'
          onChange={()=>{
            setCharAllowed((prev) => !prev)
          }}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
