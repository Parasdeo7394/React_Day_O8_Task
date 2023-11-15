export const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      const updatedCart = {
        ...state.item,
        quantity: parseInt(state.item.quantity, 10) + 1,
      };
  
      return { ...state, item: updatedCart };
    }
  
    if (action.type === "DECREMENT") {
        const updatedCart = {
          ...state.item,
          quantity: Math.max(1, state.item.quantity - 1),
        };
      
        return { ...state, item: updatedCart };
    }
    return state;
};
  