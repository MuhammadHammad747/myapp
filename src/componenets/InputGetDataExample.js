import React, { useState } from 'react'

export default function InputGetDataExample() {
    const [data, setData]= useState(null)
    const [print, setPrint]=useState(false)
function ChangeData(val){
    setData(val.target.value)
   console.log(val.target.value);
   setPrint(false)
}

  return (
    <div>
<h1>Text Get From Input Feild</h1>
<h1>{data}</h1>
<input type='text' onChange={ChangeData}/>
{
    print?
    <h1>{data}</h1>
    : null
}
<button onClick={()=>setPrint(true)}>Print Name </button>
    </div>
  )
}

