import React, { useContext } from 'react';
import './tasks-page.styles.css';

import { AuthContext } from '../../contexts/Auth.context';

import AddTasksForm from './add-tasks-form/AddTasksForm.component';
import TasksContainer from './tasks-container/TasksContainer.component';

const TasksPage = () => {
    const authConextValue = useContext(AuthContext);

    console.log(authConextValue.userToken);

    return (
        <main className="tasks-page">
            <AddTasksForm />

            <TasksContainer />
        </main>
    );
};

export default TasksPage;
