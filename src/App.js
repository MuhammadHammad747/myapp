// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
 import FunctionalComp from './componenets/functionalComp';
 import {ClassComp,ClassComp1,ClassComp2} from './componenets/ClassComp';    // Named export
 import ClickCount from './componenets/ClickCount';
import Bidder1 from './componenets/Bidder1';
import Bidder2 from './componenets/Bidder2';

import ClickEventandFunctions from './componenets/ClickEventandFunctions';
import StateExample from './componenets/StateExample';
import StateClassComp from './componenets/StateClassComp';
import PropExample from './componenets/ExampleProp';
import PropClassExample from './componenets/PropClassExample';
import InputGetDataExample from './componenets/InputGetDataExample';
import HideShowToggle from './componenets/HideShowToggle';
import FormHandling from './componenets/FormHandling';





function App() {


    const [Name, setName] = useState("hammad");
  return (
   <div>
    <h1> First React Page </h1>
    <FunctionalComp/>
    <ClassComp/>
    <ClassComp1/>
    <ClassComp2/>
    <ClickCount/>
<StateClassComp/>

<Bidder1/>
<Bidder2/>
<StateExample/>
<ClickEventandFunctions />
<PropExample name={Name}/>
<button onClick={()=>{setName("Hammad Shakoor")}} > Change Name Propos</button>

<PropClassExample name="Hammad" email="mhammadshakoor@gmail.com" />
<InputGetDataExample/>
<HideShowToggle/>
<FormHandling />

   </div>
  );
}

export default App;
