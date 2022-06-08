const tasksActionTypes = {
    INIT_TASKS: 'INIT_TASKS',
    ADD_TASK: 'ADD_TASK',
    UPDATE_TASK: 'UPDATE_TASK',
    DELETE_TASK: 'DELETE_TASK',
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

export const updateTaskAction = (index, isCompleted) => {
    const action = {
        type: tasksActionTypes.UPDATE_TASK,
        payload: {
            index: index,
            isCompleted: isCompleted,
        },
    };

    return action;
};

export const deleteTaskAction = (taskID) => {
    const action = {
        type: tasksActionTypes.DELETE_TASK,
        payload: {
            taskID: taskID,
        },
    };

    return action;
};

export default tasksActionTypes;
