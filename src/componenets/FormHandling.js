import React, { useState } from 'react'

export default function FormHandling() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [male,setMale]=useState("")
    const [female,setFemale]=useState("")
    const [phone,setPhone]=useState("")
    const [pack,setPack]=useState("")
    const [tnc,setTnc]=useState(false)

    function GetDataForm(e){
        console.log(name,email,male,female,phone,pack,tnc)

e.preventDefault();
    }

  return (
    <div>
<form onSubmit={GetDataForm}>
    <input type='text' onChange={(e)=>setName(e.target.value)}/>
    <input type='text' onChange={(e)=>setEmail(e.target.value)} />
    <input type='radio' onChange={(e)=>setMale(e.target.value)} name='male'/><span>Male</span>
    <input type='radio' onChange={(e)=>setFemale(e.target.value)} name='female'/><span>Female</span>
    <input type='text' onChange={(e)=>setPhone(e.target.value)} />
    <select onChange={(e)=>setPack(e.target.value)}>
        <option>1 Month</option>
        <option>2 Month</option>
        <option>3 Month</option>
        <option>4 Month</option>
    </select>
    <input type='checkbox' onChange={(e)=>setTnc(e.target.checked)}/>
    <button type='submit'>Submit</button>
</form>
{/* <table class="table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Male/Femael</th>
            <th>Phone No</th>
            <th>Subscribtion</th>
            <th>t & C</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td scope="row">{name}</td>
            <td></td>
            <td></td>
        </tr>

    </tbody>
</table> */}
    </div>
  )
}
