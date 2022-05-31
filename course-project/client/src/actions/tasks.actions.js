const tasksActionTypes = {
    INIT_TASKS: 'INIT_TASKS',
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

export default tasksActionTypes;
