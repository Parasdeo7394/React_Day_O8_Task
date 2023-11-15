import React, { createContext, useReducer } from 'react';
import { products } from './products';
import ContextCart from './ContextCart';
import { reducer } from './reducer';

export const CartContext = createContext();

const initialState = {
    item: products[0],
    totalAmount: 0,
    totalItem: 0,
};


const Cart = () => {
    // const [item, setItem] = useState(products[0]);
    const [state , dispatch] = useReducer(reducer , initialState);

     // increment the item
    const increment = (id) => {
        return dispatch({
        type: "INCREMENT",
        payload: id,
        });
    };

   // decrement the item
   const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };
  return (
    <>
      <CartContext.Provider value={{...state , increment , decrement}}>
        <ContextCart/>
      </CartContext.Provider>
    </>
  )
}

export default Cart