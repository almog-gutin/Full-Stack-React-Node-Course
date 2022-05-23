import React from 'react';
import './tasks-page.styles.css';

import AddTasksForm from './add-tasks-form/AddTasksForm.component';
import TasksContainer from './tasks-container/TasksContainer.component';

const TasksPage = () => {
    return (
        <main className="tasks-page">
            <AddTasksForm />

            <TasksContainer />
        </main>
    );
};

export default TasksPage;
