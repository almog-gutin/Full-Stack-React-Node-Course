import mongoose from 'mongoose';
import isEmail from 'validator/lib/isEmail.js';
import isStrongPassword from 'validator/lib/isStrongPassword.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import environments from '../../config/environments.js';

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
        minlength: [9, 'Password must be at least 9 characters'],
        validate(value) {
            if (
                !isStrongPassword(value, {
                    minLength: 9,
                    minNumbers: 2,
                })
            ) {
                throw new Error('Password is not strong enough');
            }
        },
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            },
        },
    ],
});

// Middleware for hashing a user's password before saving to the database
studentSchema.pre('save', async function (next) {
    const student = this;

    if (student.isModified('password')) {
        student.password = await bcrypt.hash(student.password, 8);
    }

    next();
});

// Method to generate an auth token an push it to the database
studentSchema.methods.generateAuthToken = async function () {
    const student = this;

    // Creating the token
    const token = jwt.sign({ _id: student._id }, environments.TOKEN_SECRET);

    student.tokens.push({ token: token });
    await student.save();

    return token;
};

studentSchema.statics.findStudentByEmailAndPassword = async (email, password) => {
    const student = await Student.findOne({ email: email });
    if (!student) throw new Error('Unable to login');

    const isPasswordMatch = await bcrypt.compare(password, student.password);
    if (!isPasswordMatch) throw new Error('Unable to login');

    return student;
};

// Method that starts when we converts the response data from an object to JSON
studentSchema.methods.toJSON = function () {
    const student = this;

    // This parses the mongodb document to javascript object
    const studentObj = student.toObject();
    delete studentObj.password;
    delete studentObj.tokens;
    delete studentObj.__v;

    return studentObj;
};

const Student = mongoose.model('Student', studentSchema);

export default Student;
