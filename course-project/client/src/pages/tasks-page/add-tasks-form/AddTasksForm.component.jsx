import React, { useState, useContext } from 'react';
import './add-tasks-form.styles.css';

import { AuthContext } from '../../../contexts/Auth.context';
import { TasksContext } from '../../../contexts/Tasks.context';
import { addTaskAction } from '../../../actions/tasks.actions';

const AddTasksForm = () => {
    const authContextValue = useContext(AuthContext);
    const tasksContextValue = useContext(TasksContext);

    const [input, setInput] = useState('');
    const [isInputValid, setIsInputValid] = useState(true);
    const [isFormValid, setIsFormValid] = useState(false);

    const handleInput = (event) => {
        const taskInput = event.target.value.trim();
        setInput(taskInput);

        taskInput === '' ? setIsInputValid(false) : setIsInputValid(true);
        taskInput === '' ? setIsFormValid(false) : setIsFormValid(true);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            description: input,
            isCompleted: false,
        };

        try {
            const response = await fetch('http://localhost:3000/tasks/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authContextValue.userToken}`,
                },
                body: JSON.stringify(data),
            });

            if (response.status !== 201) {
                throw new Error();
            }

            const responseObj = await response.json();
            const task = responseObj.data.task;

            const action = addTaskAction(task);
            tasksContextValue.dispatchTasksState(action);
        } catch (err) {
            alert('Something went wrong!');
        }
    };

    return (
        <form className="add-tasks-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="text" onInput={handleInput} />

                <button type="submit" className="add-task-btn" disabled={!isFormValid}>
                    Add
                </button>
            </div>

            {!isInputValid && <div className="error-message">You must add a task</div>}
        </form>
    );
};

export default AddTasksForm;
