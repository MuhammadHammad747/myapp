import React, { useState } from 'react'

export default function HideShowToggle() {
    const [data, setData]=useState(true);
  return (
    <div>
<h1>Hide Show & Toggle</h1>
{
    data?<h1>Hide Me </h1>:null
}

<button onClick={()=>setData(false)}>Hide</button>
<button onClick={()=>setData(true)}>Show</button>
<button onClick={()=>setData(!data)}>Toggle</button>
    </div>
  )
}
