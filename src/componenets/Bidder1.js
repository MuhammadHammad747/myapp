// Higher Order Components


import React from 'react';

import UpdatedComponent from './aunction';

 function Bidder1({money, IncreaseMoney}) {
  return (
    <div>
<h1>Jimmy has {money}</h1>
<button onClick={IncreaseMoney}>Bid</button>
    </div>
  );
}
export default UpdatedComponent(Bidder1);
