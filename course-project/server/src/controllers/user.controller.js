import User from '../models/user.model.js';

export const createUser = async (req, res) => {
    const userData = req.body;

    const user = new User(userData);

    try {
        const token = await user.generateAuthToken();

        await user.save();

        res.status(201).send({
            status: 201,
            statusText: 'Created',
            data: { user: user, token: token },
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

export const login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        if (!email || !password) {
            throw new Error();
        }

        const user = await User.findUserByEmailAndPassword(email, password);
        const token = await user.generateAuthToken();

        res.send({
            status: 200,
            statusText: 'Ok',
            data: { user: user, token: token },
            message: 'User login was successful',
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

export const logout = async (req, res) => {
    const userID = req.params.userID;
    const token = req.body.token;

    if (!token) {
        return res.status(401).send({
            status: 401,
            statusText: 'Unauthorized',
            message: '',
        });
    }

    try {
        const user = await User.findById(userID);

        user.tokens = user.tokens.filter((tokenDoc) => tokenDoc.token !== token);
        await user.save();

        res.send({
            status: 200,
            statusText: 'Ok',
            data: {},
            message: 'User logout was successful',
        });
    } catch (err) {
        res.status(500).send({
            status: 500,
            statusText: 'Internal Server Error',
            message: '',
        });
    }
};
