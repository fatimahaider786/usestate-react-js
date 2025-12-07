import "./App.css"
import { useState } from "react";
function App() {


  const [count, setcount] = useState(10)

  const [name, setName] = useState("fatima")

  const [age, setAge] = useState(18)

  const [dark, setDark] = useState(false);



  function Increment() {
    setcount(count + 15)
  }
  function decrement() {
    setcount(count - 15)
  }

  function increaseAge() {
    setAge(age + 1);
  }

  function decreaseAge() {
    setAge(age - 1);
  }

  return (
    <>
      <h1> Today we have to make an Increment and decrement counter </h1>
      
      <h1>{count}</h1>
      <button onClick={Increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <br />
      {/* name */}
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <h3>Hello: {name}</h3>
     {/* age add */}
      <div>
        <h2>Age: {age}</h2>
        <button onClick={increaseAge}>Increase Age</button>
        <button onClick={decreaseAge}>Decrease Age</button>
      </div>

      {/* dark mode */}

      <div className={dark ? "dark" : "light"}>
        <h1>Theme Change</h1>
        <button onClick={() => setDark(!dark)}>
          Toggle Theme
        </button>
      </div>

      
    </>

  )
}

export default App 