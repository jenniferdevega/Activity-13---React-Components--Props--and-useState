import { useState } from 'react';
import './css/App.css';
import Header from './Header.jsx';
import Counter from './Counter.jsx';
import Footer from './Footer.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {

  // const [variableName, functionName] = useState();

  // const [name, setName] = useState("Eper");

  // const [counter, setCounter] = useState(0);

  const [title, setTitle] = useState("Activity 13 - React Components, Props, and useState");

  const [copyright, setCopyright] = useState("Copyright 2023 © De Vega, Jennifer. All rights Reserved.");

  return (
    <>
      <Header title={title}/>
      <Counter />
      <Footer copyright={copyright}/>
    </>
  )
}

export default App
