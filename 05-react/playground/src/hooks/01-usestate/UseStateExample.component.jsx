import React, { useState } from 'react';
import './usestate-example.styles.css';

const UseStateExample = () => {
    const [count, setCount] = useState(0);
    console.log(count, setCount);

    const handleIncrement = () => {
        const updatedCount = count + 1;
        setCount(updatedCount);
    };

    const handleDecrement = () => {
        const updatedCount = count - 1;
        setCount(updatedCount);
    };

    return (
        <div className="">
            <div>{count}</div>

            <button onClick={handleIncrement}>Increment</button>

            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );

    // const countArr = useState(0);
    // console.log(countArr);

    // const handleIncrement = () => {
    //     const updatedCount = countArr[0] + 1;
    //     countArr[1](updatedCount);
    // };

    // const handleDecrement = () => {
    //     const updatedCount = countArr[0] - 1;
    //     countArr[1](updatedCount);
    // };

    // return (
    //     <div className="">
    //         <div>{countArr[0]}</div>

    //         <button onClick={handleIncrement}>Increment</button>

    //         <button onClick={handleDecrement}>Decrement</button>
    //     </div>
    // );
};

export default UseStateExample;
