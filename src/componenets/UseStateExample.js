// UseState Example

import React, { useState } from 'react'

export default function UseStateExample() {
    const [color, setColor]= useState("Red");
  return (
    <div>

<h1> this is my fvrt {color}</h1>
 <button onClick={()=> setColor("Blue")}>Set color</button>
    </div>
  )
}
