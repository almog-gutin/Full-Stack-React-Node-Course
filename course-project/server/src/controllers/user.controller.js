import User from '../models/user.model.js';

export const createUser = async (req, res) => {
    const userData = req.body;

    const user = new User(userData);

    try {
        await user.save();

        res.status(201).send({
            status: 201,
            statusText: 'Created',
            data: { user: user },
            message: 'User account was created successfully',
        });
    } catch (err) {
        res.status(400).send({
            status: 400,
            statusText: 'Bad Request',
            message: '',
        });
    }
};
