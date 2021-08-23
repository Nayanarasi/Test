import React, {useState} from "react";

function CounterFunction(){//counterfunction = component
    
    let [number, setNumber] = useState(0)//usestate-reacts hook

    function increment(){
        setNumber(++number)
    }

    return(
        <div>
            <h3>Functional Component</h3>
            <h1>Counter = {number}</h1>
            <button onClick = {e => increment}>Increment</button>
        </div>
    )
}
export default CounterFunction;