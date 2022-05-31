import Cart from '../models/cart.model.js';

export const getCart = async (req, res) => {
    const user = req.user;

    try {
        const cart = await Cart.findOne({ owner: user._id });
        if (!cart) throw new Error();

        if (cart.books.length > 0) {
            await cart.populate('books.bookID');
        }

        res.send({
            status: 200,
            statusText: 'Ok',
            data: { cart: cart },
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

export const addBookToCart = async (req, res) => {
    const user = req.user;

    const bookID = req.body.bookID;
    if (!bookID) {
        return res.status(400).send({
            status: 400,
            statusText: 'Bad Request',
            message: '',
        });
    }

    try {
        const cart = await Cart.findOne({ owner: user._id });
        if (!cart) throw new Error();

        const books = cart.books;
        if (!books.find((bookDoc) => bookDoc.bookID.toString() === bookID)) {
            cart.books.unshift({ bookID: bookID });

            await cart.save();
        }

        res.send({
            status: 200,
            statusText: 'Ok',
            data: { cart: cart },
            message: 'The book was added to your cart',
        });
    } catch (err) {
        res.status(500).send({
            status: 500,
            statusText: 'Internal Server Error',
            message: '',
        });
    }
};

export const updateCart = async (req, res) => {
    const user = req.user;

    const bookID = req.body.bookID;
    if (bookID == null) {
        return res.status(400).send({
            status: 400,
            statusText: 'Bad Request',
            message: '',
        });
    }

    try {
        const cart = await Cart.findOne({ owner: user._id });
        if (!cart) throw new Error();

        if (!cart.books.find((bookDoc) => bookDoc.bookID.toString() === bookID)) {
            return res.status(400).send({
                status: 400,
                statusText: 'Bad Request',
                message: '',
            });
        }

        cart.books = cart.books.filter((bookDoc) => bookDoc.bookID.toString() !== bookID);

        await cart.save();

        res.send({
            status: 200,
            statusText: 'Ok',
            data: { cart: cart },
            message: 'Your cart has been updated',
        });
    } catch (err) {
        res.status(500).send({
            status: 500,
            statusText: 'Internal Server Error',
            message: '',
        });
    }
};

export const checkout = async (req, res) => {
    const user = req.user;

    try {
        if (!user) throw new Error();

        const cart = await Cart.findOne({ owner: user._id });
        if (!cart) throw new Error();

        if (cart.books.length === 0) {
            return res.status(400).send({
                status: 400,
                statusText: 'Bad Request',
                message: '',
            });
        }

        cart.books = [];
        await cart.save();

        res.send({
            status: 200,
            statusText: 'Ok',
            message: 'Checkout successful',
            data: { cart: cart },
        });
    } catch (err) {
        res.status(500).send({
            status: 500,
            statusText: 'Internal Server Error',
            message: '',
        });
    }
};
