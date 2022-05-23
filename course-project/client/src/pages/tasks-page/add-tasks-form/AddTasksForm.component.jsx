import React, { useState } from 'react';
import './add-tasks-form.styles.css';

const AddTasksForm = () => {
    const [input, setInput] = useState('');
    const [isInputValid, setIsInputValid] = useState(true);
    const [isFormValid, setIsFormValid] = useState(false);

    const handleInput = (event) => {
        const taskInput = event.target.value.trim();
        setInput(taskInput);

        taskInput === '' ? setIsInputValid(false) : setIsInputValid(true);
        taskInput === '' ? setIsFormValid(false) : setIsFormValid(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
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
