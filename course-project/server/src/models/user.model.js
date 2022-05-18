import mongoose from 'mongoose';
import isEmail from 'validator/lib/isEmail.js';
import isStrongPassword from 'validator/lib/isStrongPassword.js';

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, 'First name is required'],
    },
    lastName: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, 'Last name is required'],
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, 'Email is required'],
        unique: [true, 'Email is taken already'],
        validate(value) {
            if (!isEmail(value)) {
                throw new Error('Email is invalid');
            }
        },
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'Password is required'],
        minlength: 8,
        maxlength: 20,
        validate(value) {
            if (!isStrongPassword(value)) {
                throw new Error(
                    'Password must contain at least 8 charachters, at least 1 uppercase letter, and at least one number'
                );
            }
        },
    },
});

const User = mongoose.model('User', userSchema);

export default User;
