import Book from '../models/book.model.js';

export const getBooks = async (req, res) => {
    try {
        const books = await Book.find();

        res.send({
            status: 200,
            statusText: 'Ok',
            data: { books: books },
            message: '',
        });
    } catch (err) {
        res.status(500).send({
            status: 500,
            statusText: 'Internal Server Error',
            message: '',
        });
    }
};

export const getBook = async (req, res) => {
    const bookID = req.params.id;
    if (!bookID) {
        return res.status(400).send({
            status: 400,
            statusText: 'Bad Request',
            message: '',
        });
    }

    try {
        const book = await Book.findById(bookID);
        if (!book) throw new Error();

        res.send({
            status: 200,
            statusText: 'Ok',
            data: { book: book },
            message: '',
        });
    } catch (err) {
        res.status(500).send({
            status: 500,
            statusText: 'Internal Server Error',
            message: '',
        });
    }
};

// export const createBook = async (req, res) => {
//     const bookData = req.body;
//     const book = new Book(bookData);

//     try {
//         await book.save();

//         res.send({
//             status: 201,
//             statusText: 'Created',
//             data: { book: book },
//             message: 'Book was created successfully',
//         });
//     } catch (err) {
//         return res.status(400).send({
//             status: 400,
//             statusText: 'Bad Request',
//             message: '',
//         });
//     }
// };
