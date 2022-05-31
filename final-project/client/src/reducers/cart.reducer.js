import cartActionTypes from '../actions/cart.actions';

export const CART_INITIAL_STATE = { items: [], price: 0 };

const cartReducer = (state, action) => {
    switch (action.type) {
        case cartActionTypes.INIT_CART: {
            const cartItems = action.payload.cartItems;

            let price = 0;
            for (let i = 0; i < cartItems.length; i++) {
                const cartItem = cartItems[i].bookID;

                price += cartItem.price;
            }
            const updatedState = { items: cartItems, price: price };

            return updatedState;
        }
        case cartActionTypes.UPDATE_CART: {
            const itemID = action.payload.itemID;
            const itemPrice = action.payload.itemPrice;

            const updatedCartItems = [...state.items].filter((item) => item.bookID._id !== itemID);
            const updatedPrice = state.price - itemPrice;

            const updatedState = { items: updatedCartItems, price: updatedPrice.toFixed(2) };

            return updatedState;
        }
        case cartActionTypes.CHECKOUT: {
            const updatedState = { items: [], price: 0 };

            return updatedState;
        }
        default:
            return state;
    }
};

export default cartReducer;
