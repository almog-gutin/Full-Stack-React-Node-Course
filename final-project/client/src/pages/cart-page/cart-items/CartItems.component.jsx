import { useContext } from 'react';
import './cart-items.styles.css';

import { CartContext } from '../../../contexts/Cart.context';

import CartItem from './cart-item/CartItem.component';

const CartItems = () => {
    const cartContextValue = useContext(CartContext);

    return (
        <div className="cart-items">
            {cartContextValue.cart.items.map((cartItem) => (
                <CartItem
                    key={cartItem.bookID._id}
                    id={cartItem.bookID._id}
                    bookCover={cartItem.bookID.bookCover}
                    title={cartItem.bookID.title}
                    author={cartItem.bookID.author}
                    price={cartItem.bookID.price}
                />
            ))}
        </div>
    );
};

export default CartItems;
