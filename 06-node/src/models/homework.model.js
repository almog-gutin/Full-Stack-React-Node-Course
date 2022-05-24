import mongoose from 'mongoose';

const homeworkSchema = new mongoose.Schema({
    studentID: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
});

const Homework = mongoose.model('Homework', homeworkSchema);

export default Homework;
