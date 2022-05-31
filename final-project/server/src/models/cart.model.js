import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    ownerID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: [true, 'Owner ID required'],
    },
    books: [
        {
            bookID: {
                type: mongoose.SchemaTypes.ObjectId,
                ref: 'Book',
                required: [true, 'Book ID required'],
            },
        },
    ],
});

cartSchema.methods.toJSON = function () {
    const cart = this;

    const cartObj = cart.toObject();
    delete cartObj.__v;

    return cartObj;
};

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
