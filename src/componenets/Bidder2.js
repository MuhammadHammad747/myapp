// Higher Order Components

import React from 'react';

import UpdatedComponent from './aunction';

 function Bidder2({money, IncreaseMoney}) {
  return (
    <div>
<h1>John has {money}</h1>
<button onClick={IncreaseMoney}>Bid</button>
    </div>
  );
}
export default UpdatedComponent(Bidder2);
