import { useContext } from 'react';
import environments from '../../../../environments/environments';
import './cart-item.styles.css';

import { AuthContext } from '../../../../contexts/Auth.context';
import { CartContext } from '../../../../contexts/Cart.context';

import { updateCartAction } from '../../../../actions/cart.actions';

const API_URL = environments.API_URL;

const CartItem = (props) => {
    const authContextValue = useContext(AuthContext);
    const cartContextValue = useContext(CartContext);

    const handelRemoveFromCart = async () => {
        const data = { bookID: props.id };

        try {
            const response = await fetch(`${API_URL}/cart`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': authContextValue.userToken,
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error();
            }

            cartContextValue.dispatchCart(updateCartAction(props.id, props.price));
        } catch (err) {
            alert('Something went wrong!');
        }
    };

    return (
        <div className="cart-item">
            <img src={props.bookCover} alt={props.title} />

            <div className="meta-data">
                <h3>{props.title}</h3>
                <h4>{props.author}</h4>
            </div>

            <div>{`$${props.price}`}</div>

            <button onClick={handelRemoveFromCart} className="remove-btn">
                Remove
            </button>
        </div>
    );
};

export default CartItem;
