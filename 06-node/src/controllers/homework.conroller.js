import Homework from '../models/homework.model.js';

export const createHomework = async (req, res) => {
    const student = req.student;
    const data = req.body;

    try {
        const homework = new Homework({
            studentID: student._id,
            title: data.title,
            subject: data.subject,
        });

        await homework.save();

        res.status(201).send({
            status: 201,
            statusText: 'Created',
            data: homework,
            message: 'Homework was created successfully',
        });
    } catch (err) {
        res.status(400).send({
            status: 400,
            statusText: 'Bad Request',
            message: '',
        });
    }
};

export const getHomework = async (req, res) => {
    const homeworkID = req.params.homeworkID;

    try {
        const homework = await Homework.findById(homeworkID);

        await homework.populate('studentID');

        res.send({
            status: 200,
            statusText: 'Ok',
            data: homework,
            message: '',
        });
    } catch (err) {
        res.status(400).send({
            status: 400,
            statusText: 'Bad Request',
            message: '',
        });
    }
};
