// Higher Order Components


import React, { useState } from 'react'

 function UpdatedComponent(OriginalComponent) {
function NewComponent(){
    const [money, setMoney]= useState(10);
    const IncreaseMoney = () => {
        setMoney(money * 2);
    };
    return <OriginalComponent IncreaseMoney={IncreaseMoney} money={money}/>
}
return NewComponent;
}
export default UpdatedComponent;

