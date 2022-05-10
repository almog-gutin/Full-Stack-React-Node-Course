import React, { useState, useReducer } from 'react';
import './useReducer-example.styles.css';

const COUNT_INITIAL_STATE = { value: 0 };

// The function that updates the state
const countReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT': {
            const updatedCountValue = state.value + 1;
            console.log(updatedCountValue);

            return { value: updatedCountValue };
        }
        case 'DECREMENT': {
            const updatedCountValue = state.value - 1;
            console.log(updatedCountValue);

            return { value: updatedCountValue };
        }
    }

    return state;
};

const UseReducerExample = () => {
    // const [state, dispatchState] = useReducer(reducer, inititalState);
    const [countState, dispatchCountState] = useReducer(countReducer, COUNT_INITIAL_STATE);

    const handleIncrement = () => {
        const action = {
            type: 'INCREMENT', // This states what the reducer needs to update
            payload: {
                // This contains the updated values for the state
            },
        };

        dispatchCountState(action);
    };

    const handleDecrement = () => {
        const action = {
            type: 'DECREMENT',
            payload: {},
        };

        dispatchCountState(action);
    };

    return (
        <div>
            <div>{countState.value}</div>

            <button type="button" onClick={handleIncrement}>
                Increment
            </button>

            <button type="button" onClick={handleDecrement}>
                Decrement
            </button>
        </div>
    );
};

export default UseReducerExample;
