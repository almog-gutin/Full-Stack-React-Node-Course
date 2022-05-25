import jwt from 'jsonwebtoken';
import environments from '../../config/environments.js';

import Student from '../models/student.model.js';

const studentAuth = async (req, res, next) => {
    try {
        // Checks if the Authorization header in the HTTP request exists
        const authorization = req.header('Authorization');
        if (!authorization) {
            throw new Error();
        }

        // Removes the "Bearer " and checks if the token exists
        const token = authorization.replace('Bearer ', '');
        if (!token) {
            throw new Error();
        }

        // jwt.verify() checks if the token is valid and returns the payload
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
