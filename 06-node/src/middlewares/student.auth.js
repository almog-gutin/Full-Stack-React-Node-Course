import jwt from 'jsonwebtoken';
import environments from '../../config/environments.js';

import Student from '../models/student.model.js';

const studentAuth = async (req, res, next) => {
    try {
        const authorization = req.header('Authorization');
        if (!authorization) {
            throw new Error();
        }

        const token = authorization.replace('Bearer ', '');
        if (!token) {
            throw new Error();
        }

        // jwt.verify() checks if the token is valid
        const data = jwt.verify(token, environments.TOKEN_SECRET);

        // Finds the student with the id and token in the database
        const student = await Student.findOne({ _id: data._id, 'tokens.token': token });
        if (!student) {
            throw new Error();
        }

        // Adding the data to the request object for the next middleware
        req.student = student;
        req.token = token;

        next();
    } catch (err) {
        res.status(401).send({
            status: 401,
            statusText: 'Unathorized',
            message: 'Student was not authorized',
        });
    }
};

export default studentAuth;
