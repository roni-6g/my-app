import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(10);    
    return (
        <div>
            <h1>Counter: {count} </h1>
            <button onClick={() => setCount(count + 1)}>Click For Up</button>
            <button onClick={() => setCount(count - 1)}>Click For Down</button>
        </div>
    );
}

export default Counter;