import { useState } from 'react'
import './index.css'
import { ChevronUp } from "react-feather";
import { ChevronsUp } from "react-feather";
import { RotateCcw } from "react-feather";
import { Hash } from 'react-feather'
import { ChevronsDown } from "react-feather";
import { ChevronDown } from "react-feather";

function App() {
  const [count, setCount] = useState(0)
  
  const styleCount = () => {
    return count < 0 ? "red" : count > 0 ? "green" : "blue";
  };
  return (
    <section className="container">
      <p>Current Value</p>
      <h1 
      style={{ color: styleCount() }}
      >
        {count}
        </h1>
      <div className="button-wrapper">
        <button onClick={() => setCount((count) => count + 1)}>
          <ChevronUp />
        </button>
        <button onClick={() => setCount((count) => count + 10)}>
          <ChevronsUp />
        </button>
        <button onClick={() => setCount((count) => (count = 0))}>
          <RotateCcw />
        </button>
        <button
          onClick={() =>
            setCount((count) => (count = Math.floor(Math.random() * 100))) + 1
          }
        >
          <Hash />
        </button>
        <button onClick={() => setCount((count) => count - 10)}>
          <ChevronsDown />
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          <ChevronDown />
        </button>
      </div>
    </section>
  );
}

export default App
