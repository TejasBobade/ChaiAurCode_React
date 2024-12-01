import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'


function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "tejas",
    age: 21
  }

  let newArr = [1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card className = "chaiaurcode" username = "ChaiAurReact" paragraphText = "Start your react learning."/>
      <Card username= "Tejas" paragraphText = "Hello to chai aur code."/>
    </>
  )
}

export default App
