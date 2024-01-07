// UseState Example

import React, { useState } from 'react'

export default function StateExample() {
    const [color, setColor]= useState("Red");
    const [name, setName]= useState("Hammad");
    function NameSet(){
        setName ("Hammad Shakoor");
    }

  return (
    <div>

<h1> this is my fvrt {color}</h1>
 <button onClick={()=> setColor("Blue")}>Set color</button>
 <h1> My Full Name is  {name}</h1>
 <button onClick={NameSet}>Change Name</button>
    </div>
  )
}
