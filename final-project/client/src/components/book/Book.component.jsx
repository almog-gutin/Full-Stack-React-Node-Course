import { useNavigate } from 'react-router-dom';
import './book.styles.css';

const Book = (props) => {
    const navigate = useNavigate();

    const handleBookClick = () => navigate(`/books/${props.id}`);

    return (
        <div className="book-container" onClick={handleBookClick}>
            <img src={props.bookCover} alt={props.title} />

            <h3>{props.title}</h3>

            <h4>{props.author}</h4>
        </div>
    );
};

export default Book;
