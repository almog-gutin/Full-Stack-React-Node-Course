import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './tasks-page.styles.css';

import { AuthContext } from '../../contexts/Auth.context';

import Loader from '../../components/shared/loader/Loader.component';
import AddTasksForm from './add-tasks-form/AddTasksForm.component';
import TasksContainer from './tasks-container/TasksContainer.component';

const TasksPage = () => {
    const navigate = useNavigate();

    const authConextValue = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (authConextValue.userToken == null) {
            navigate('/login');
        }

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return isLoading ? (
        <Loader />
    ) : (
        <main className="tasks-page">
            <AddTasksForm />

            <TasksContainer />
        </main>
    );
};

export default TasksPage;
