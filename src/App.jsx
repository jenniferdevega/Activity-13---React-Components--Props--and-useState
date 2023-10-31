import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Header from './Header.jsx'
import Counter from './Counter.jsx'
import Footer from './Footer.jsx'

function App() {

  // const [variableName, functionName] = useState();

  const [name, setName] = useState("Eper");

  const [counter, setCounter] = useState(0);

  return (
    <>
      <Header />
      <Counter />
      <Footer />

      <h1>Hello {name}!</h1>
      <h2>{counter}</h2>
      <button onClick={
        ()=>{
          setCounter(counter + 1);
        }
      }>
        Click Me!
      </button>
      {
        counter > 10 ? (<h1 style={{color:"green"}}>Congratulations</h1>) : (<h1>Not yet</h1>)
      }

      <button onClick={
        () => {
          setName("Bryl");
        }
      }>
        Change Name
      </button>

      <input type="text" onChange={
        (e) => {
          setName(e.target.value);
        }
      }/>
    </>
  )
}

export default App
