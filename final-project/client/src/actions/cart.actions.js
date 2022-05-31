const cartActionTypes = {
    INIT_CART: 'UPDATE_CART',
    UPDATE_CART: 'REMOVE_ITEM',
    CHECKOUT: 'CHECKOUT',
};

export const initCartAction = (cartItems) => ({
    type: cartActionTypes.INIT_CART,
    payload: {
        cartItems: cartItems,
    },
});

export const updateCartAction = (itemID, itemPrice) => ({
    type: cartActionTypes.UPDATE_CART,
    payload: {
        itemID: itemID,
        itemPrice: itemPrice,
    },
});

export const checkoutAction = () => ({
    type: cartActionTypes.CHECKOUT,
    payload: {},
});

export default cartActionTypes;
