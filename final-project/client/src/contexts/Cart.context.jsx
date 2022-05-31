import { createContext, useReducer } from 'react';

import cartReducer, { CART_INITIAL_STATE } from '../reducers/cart.reducer';

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cart, dispatchCart] = useReducer(cartReducer, CART_INITIAL_STATE);

    const value = {
        cart: cart,
        dispatchCart: dispatchCart,
    };

    return <CartContext.Provider value={value}>{props.children}</CartContext.Provider>;
};

export default CartContextProvider;
