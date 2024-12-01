import { useState } from "react"

function App() {
  let [color, setColor] = useState('black');

  return (
    <>
      
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color}}
      >
        <h1 className="absolute top-60 left-80 p-5 rounded-xl bg-white">{color}</h1>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3  py-2 rounded-3xl">
            <button className="outline-none px-4 rounded-full text-white shadow-lg"
            onClick={() => setColor("red")}
            style={{backgroundColor : "red"}}>Red</button>
            <button className="outline-none px-4 rounded-full text-white shadow-lg"
            onClick={() => setColor("blue")}
            style={{backgroundColor : "blue"}}>blue</button>
            <button className="outline-none px-4 rounded-full text-white shadow-lg"
            onClick={() => setColor("green")}
            style={{backgroundColor : "green"}}>green</button>
            <button className="outline-none px-4 rounded-full text-white shadow-lg"
            onClick={() => setColor("yellow")}
            style={{backgroundColor : "yellow"}}>yellow</button>
            <button className="outline-none px-4 rounded-full text-white shadow-lg"
            onClick={() => setColor("pink")}
            style={{backgroundColor : "pink"}}>pink</button>
            <button className="outline-none px-4 rounded-full text-white shadow-lg"
            onClick={() => setColor("purple")}
            style={{backgroundColor : "purple"}}>purple</button>
            <button className="outline-none px-4 rounded-full text-white shadow-lg"
            onClick={() => setColor("indigo")}
            style={{backgroundColor : "indigo"}}>indigo</button>
            <button className="outline-none px-4 rounded-full text-white shadow-lg"
            onClick={() => setColor("olive")}
            style={{backgroundColor : "olive"}}>olive</button>
          </div>
        </div>
      </div>
      </>
  )
}

export default App
