import React, { useState } from 'react'

const Usestate = () => {
    const [ count, setCount ]  = useState(0);
  return (
    <>
    <h1>{ count }</h1>
    <button onClick={() => setCount(count + 1)}>Add</button>
    <button onClick={() => setCount(count - 1)}>Sub</button> 
    </>
  )
}

export default Usestate