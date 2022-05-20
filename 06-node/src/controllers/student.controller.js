import Student from '../models/student.model.js';

export const getStudents = async (req, res) => {
    try {
        const students = await Student.find();

        // Default: res.send returns status code 200
        res.send({
            status: 200,
            statusText: 'Ok',
            data: students,
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

export const getStudent = async (req, res) => {
    const studentID = req.params.studentID;

    try {
        // const students = await Student.find({
        //     _id: studentID,
        // });
        // const student = await Student.findOne({ _id: studentID });
        const student = await Student.findById(studentID);

        res.send({
            status: 200,
            statusText: 'Ok',
            data: student,
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

export const updateStudent = async (req, res) => {
    const studentID = req.params.studentID;

    const data = req.body;

    try {
        // await Student.updateOne({ _id: studentID }, data);
        // await Student.updateMany({ _id: studentID }, data);
        await Student.findByIdAndUpdate(studentID, data);

        res.status(202).send({
            status: 202,
            statusText: 'Accepted',
            data: {},
            message: 'Student was updated successfully',
        });
    } catch (err) {
        res.status(500).send({
            status: 500,
            statusText: 'Internal Server Error',
            message: '',
        });
    }
};

export const deleteStudent = async (req, res) => {
    const studentID = req.params.studentID;

    try {
        // await Student.deleteOne({ _id: studentID });
        // await Student.deleteMany({ _id: studentID });
        const student = await Student.findByIdAndDelete(studentID);

        // const student = await Student.findById(studentID);
        // await student.delete()

        res.status(200).send({
            status: 200,
            statusText: 'Ok',
            data: student,
            message: 'Student was deleted successfully',
        });
    } catch (err) {
        res.status(500).send({
            status: 500,
            statusText: 'Internal Server Error',
            message: '',
        });
    }
};

export const login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const student = await Student.findStudentByEmailAndPassword(email, password);

        const token = await student.generateAuthToken();

        res.send({
            status: 200,
            statusText: 'Ok',
            data: {
                student: student,
                token: token,
            },
            message: 'Student login was successful',
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
