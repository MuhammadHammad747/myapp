// import logo from './logo.svg';
// import './App.css';
import React from 'react';
 import FunctionalComp from './componenets/functionalComp';
 import {ClassComp,ClassComp1,ClassComp2} from './componenets/ClassComp';    // Named export
 import ClickCount from './componenets/ClickCount';
import Bidder1 from './componenets/Bidder1';
import Bidder2 from './componenets/Bidder2';

import ClickEventandFunctions from './componenets/ClickEventandFunctions';
import StateExample from './componenets/StateExample';





function App() {
  return (
   <div>
    <h1> First React Page </h1>
    <FunctionalComp/>
    <ClassComp/>
    <ClassComp1/>
    <ClassComp2/>
    <ClickCount/>


<Bidder1/>
<Bidder2/>
<StateExample/>
<ClickEventandFunctions />

   </div>
  );
}

export default App;
