import { useState } from 'react';
import './App.css'

function App() {
  // useState hook in react
  const [counter , setCounter] = useState(0)

  // The below variable get updated but never propaget inside UI
  // let counter = 0

  // add value of counter
  const addValue = () => {
    if (counter >= 20) return;
    counter += 1;  
    setCounter(counter)
  }

  // remove value of counter
  const removeValue = () => {
    if (counter <= 0) return;
    console.log("clicked" , counter);
    counter -= 1;  
    setCounter(counter)
    // Interview Question
    // setCounter(counter => counter + 1)
    // setCounter(counter => counter + 1)
    // setCounter(counter => counter + 1)
    // setCounter(counter => counter + 1)

  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
