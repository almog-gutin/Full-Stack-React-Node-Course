import mongoose from 'mongoose';
import validator from 'validator';

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'Title is required'],
    },
    author: {
        type: String,
        trim: true,
        required: [true, 'Author is required'],
    },
    bookCover: {
        type: String,
        trim: true,
        required: [true, 'Book cover is required'],
        validate(value) {
            if (!validator.isURL(value)) throw new Error('Invalid URL.');
        },
    },
    description: {
        type: String,
        trim: true,
        required: [true, 'Description is required'],
    },

    pages: {
        type: Number,
        required: [true, 'Page amount is required'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
    },
});

bookSchema.methods.toJSON = function () {
    const book = this;

    const bookObj = book.toObject();
    bookObj.price = '$' + bookObj.price;
    delete bookObj.__v;

    return bookObj;
};

const Book = mongoose.model('Book', bookSchema);

export default Book;
