import PropTypes from 'prop-types';
//import { Link } from  'react-router-dom'
import { useNavigate } from 'react-router-dom';

const BookCard = ({ book, role }) => {
    const { name = "Unknown", author = "Unknown", imageUrl = "default.jpg" } = book;
    const navigate = useNavigate();
    
    const handleEdit = () => {
        navigate(`/book/${book._id }`);
    };
    const handleDelete = () => {
        navigate(`/delete/${book._id}`);
    }
    return (
        <div className="book-card">
            <img src={imageUrl} alt={name} className="book-image" />
            <div className="book-details">
                <h3>{name}</h3>
                <p>{author}</p>
            </div>
            {role === "admin" &&
            <div className="book-actions">
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>}
        </div>
    );
};

BookCard.propTypes = {
    book: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
    }).isRequired,
    role: PropTypes.string.isRequired,
};

export default BookCard;
