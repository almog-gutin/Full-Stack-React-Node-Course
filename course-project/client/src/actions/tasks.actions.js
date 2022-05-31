const tasksActionTypes = {
    INIT_TASKS: 'INIT_TASKS',
    ADD_TASK: 'ADD_TASK',
};

export const initTasksAction = (tasks) => {
    const action = {
        type: tasksActionTypes.INIT_TASKS,
        payload: {
            tasks: tasks,
        },
    };

    return action;
};

export const addTaskAction = (task) => {
    const action = {
        type: tasksActionTypes.ADD_TASK,
        payload: {
            task: task,
        },
    };

    return action;
};

export default tasksActionTypes;
