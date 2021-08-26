import React from "react";
import { useState } from "react";

function UpDownCounter() {
    // function raiseUp() {
    //     setCount(prv => prv + 1)
    // }
    const [count, setCount] = useState(0)
    //const is creating 2 variables on this line!
    return (
        <div>

            <button onClick={() => { setCount(prv => prv + 1) }}> Up </button>
            <p>{count}</p>
            <button onClick={() => { setCount(prv => prv - 1) }}> Down </button>

        </div>
        // all of this has one parent, so it needs to be in a div
        //to make three of these, go to app.tsx and shift alt with arrow down
    )
}

export default UpDownCounter;