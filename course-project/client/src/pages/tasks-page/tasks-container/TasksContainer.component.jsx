import React, { useContext } from 'react';
import './tasks-container.styles.css';

import { TasksContext } from '../../../contexts/Tasks.context';

import Task from './task/Task.component';

const TasksContainer = () => {
    const tasksContextValue = useContext(TasksContext);

    return (
        <ul className="tasks-container">
            {tasksContextValue.tasksState.length === 0 ? (
                <div className="empty-list">Your list is empty</div>
            ) : (
                tasksContextValue.tasksState.map((task) => {
                    return <Task id={task._id} description={task.description} isCompleted={task.isCompleted} />;
                })
            )}
        </ul>
    );
};

export default TasksContainer;
