import mongoose from 'mongoose';
import isEmail from 'validator/lib/isEmail';
import isStrongPassword from 'validator/lib/isStrongPassword';

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
    },
    lastName: {
        type: String,
        trim: true,
        uppercase: true,
        required: [true, 'Last name is required'],
    },
    age: {
        type: Number,
        min: 18,
        max: 34,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: [true, 'Email must be unique'],
        validate(value) {
            if (!isEmail(value)) throw new Error('Email is invalid');
        },
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters'],
        maxlength: 20,
        validate(value) {},
    },
});

const Student = mongoose.model('Student', studentSchema);

export default Student;
