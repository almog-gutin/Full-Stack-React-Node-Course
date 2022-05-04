/* 
    Create a component which has 2 elements:
    1. Button
    2. Div that represents a square size of 200x200px background color blue

    When the user presses the button the square will change its color to red.

    Guess: useState
*/

import React, { useState } from 'react';
import './usestate-exercise.styles.css';

const UsestateExercise = () => {
    const [squareColor, setSqaureColor] = useState('blue');

    const handleClick = () => {
        setSqaureColor(squareColor === 'blue' ? 'red' : 'blue');
    };

    return (
        <div className="usestate-exercise-container">
            <button type="button" onClick={handleClick}>
                Change Square Color
            </button>

            <div className={`usestate-square ${squareColor}`}></div>
        </div>
    );
};

export default UsestateExercise;
