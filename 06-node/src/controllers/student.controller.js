import Student from '../models/student.model.js';

export const getStudents = async (req, res) => {
    try {
        console.log(req);

        const students = ['Noga', 'Tamar', 'Yarden', 'Oren', 'Almog'];

        // Default: res.send returns status code 200
        res.send({
            status: 200,
            statusText: 'Ok',
            data: students,
            message: '',
        });
    } catch (err) {}
};

export const createStudent = async (req, res) => {
    const data = req.body;
    console.log('Data:', data);

    const student = new Student(data);
    console.log('Student:', student);

    try {
        await student.save();

        res.status(201).send({
            status: 201,
            statusText: 'Created',
            data: student,
            message: 'Student was created successfully',
        });
    } catch (err) {
        console.log(err);

        res.status(400).send({
            status: 400,
            statusText: 'Bad Request',
            message: '',
        });
    }
};

export const doesStudentExists = async (req, res) => {
    console.log(req.params);

    try {
        const students = ['Noga', 'Tamar', 'Yarden', 'Oren', 'Almog'];

        const studentName = req.params.studentName;
        const doesStudentExist = students.includes(studentName);

        res.send({
            status: 200,
            statusText: 'Ok',
            data: {},
            message: `Student ${doesStudentExist ? 'exists' : 'does not exist'}.`,
        });
    } catch (err) {}
};

export const getStudentsByIndex = async (req, res) => {
    console.log(req.query);
    const index = +req.query.index;

    try {
        const students = ['Noga', 'Tamar', 'Yarden', 'Oren', 'Almog'];

        const array = students.slice(index);

        res.send({
            status: 200,
            statusText: 'Ok',
            data: array,
            message: '',
        });
    } catch (err) {}
};
