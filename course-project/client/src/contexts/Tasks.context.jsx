import { createContext, useReducer } from 'react';

import tasksReducer, { TASKS_INITIAL_STATE } from '../reducers/tasks.reducer';

export const TasksContext = createContext();

const TasksContextProvider = (props) => {
    const [tasksState, dispatchTasksState] = useReducer(tasksReducer, TASKS_INITIAL_STATE);

    const value = {
        tasksState: tasksState,
        dispatchTasksState: dispatchTasksState,
    };

    return <TasksContext.Provider value={value}>{props.children}</TasksContext.Provider>;
};

export default TasksContextProvider;
