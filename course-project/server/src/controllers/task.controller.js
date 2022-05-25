import Task from '../models/task.model.js';

export const createTask = async (req, res) => {
    const user = req.user;
    const data = req.body;

    try {
        const task = new Task({
            userID: user._id,
            // description: data.description,
            // isCompleted: data.isCompleted,
            ...data, // Spreads (copies) the properties of data to the object
        });

        await task.save();

        res.status(201).send({
            status: 201,
            statusText: 'Created',
            data: {
                task: task,
            },
            message: 'Task was created successfully',
        });
    } catch (err) {
        res.status(400).send({
            status: 400,
            statusText: 'Bad Request',
            message: '',
        });
    }
};

export const getTasks = async (req, res) => {
    const user = req.user;
    try {
        // const tasks = await Task.find({ userID: user._id });

        await user.populate('tasks');
        const tasks = user.tasks;

        res.send({
            status: 200,
            statusText: 'Ok',
            data: {
                tasks: tasks,
            },
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
