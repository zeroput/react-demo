
import * as React from "react";
import { useState } from "react";
import './MyCounter.css'

function MyCounter() {

    const [counter, setCounter] = useState(0);

    const increaseHandler = () => {
        let a = counter + 1;
        setCounter(a)
    }
    const decreaseHandler = () => {
        setCounter(counter - 1)
    }
    return (
        <main className="light">
            <h1>{counter}</h1>
            <button onClick={increaseHandler}>+</button>
            <button onClick={decreaseHandler}>-</button>
        </main>
    );
}

export default function App() {
    return <MyCounter />
}
