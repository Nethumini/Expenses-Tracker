import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {

  return (
    <div>
      <h2>Your Balance</h2>
      <h1>LKR {total}</h1>
    </div>
  )
}

export default Balance
