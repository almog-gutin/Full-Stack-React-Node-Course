import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import environments from '../../environments/environments';
import './book-page.styles.css';

import { AuthContext } from '../../contexts/Auth.context';

import Loader from '../../components/shared/loader/Loader.component';

const API_URL = environments.API_URL;

const BookPage = () => {
    const params = useParams();
    const navigate = useNavigate();

    const authContextValue = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(true);
    const [book, setBook] = useState(null);

    const handleAddToCart = async () => {
        if (authContextValue.userToken == null) {
            alert('You must be logged in to your account');

            return;
        }

        const data = { bookID: params.bookID };

        try {
            const response = await fetch(`${API_URL}/cart/add-to-cart`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': authContextValue.userToken,
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error();
            }

            const responseObj = await response.json();
            const message = responseObj.message;

            alert(message);
        } catch (err) {
            alert('Something went wrong!');
        }
    };

    useEffect(() => {
        const bookID = params.bookID;

        const getBook = async () => {
            try {
                const response = await fetch(`${API_URL}/books/${bookID}`);

                if (!response.ok) {
                    throw new Error();
                }

                const responseObj = await response.json();
                const book = responseObj.data.book;

                setBook(book);

                setTimeout(() => {
                    setIsLoading(false);
                }, 2000);
            } catch (err) {
                console.log(err);
                navigate('*');
            }
        };

        getBook();
    }, []);

    return isLoading ? (
        <Loader />
    ) : (
        <main className="book-page">
            <div className="book-details">
                <img src={book.bookCover} alt={book.bookTitle} />

                <h3>{book.title}</h3>

                <h4>{book.author}</h4>

                <div className="meta-data">
                    <div>
                        <span>Pages: </span>
                        <span>{book.pages}</span>
                    </div>

                    <div>
                        <span>Price: </span>
                        <span>{book.price}</span>
                    </div>
                </div>

                <button onClick={handleAddToCart}>Add To Cart</button>

                <p className="description">{book.description}</p>
            </div>
        </main>
    );
};

export default BookPage;
