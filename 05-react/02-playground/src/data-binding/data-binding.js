import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const handleClick = () => {
    console.log('This button was clicked');
};

const handleInput = (event) => {
    console.log(event.target.value);
};

const handleSubmit = (event) => {
    event.preventDefault();
    console.log('The form was sent!');
};

const title = 'title'.toUpperCase();
const jsx1 = (
    <div>
        <h1 className="background-red">{title}</h1>

        <form>
            <label htmlFor="input-example">Label Example:</label>

            <input id="input-example" type="text" onInput={handleInput} />
        </form>

        <button type="button" onClick={handleClick}>
            Click Me
        </button>
    </div>
);

const jsx2 = (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="input">Example: </label>
            <input id="input" type="text" />

            <button type="submit">Submit</button>
        </form>
    </div>
);

const title2 = 'Michae';
const isSquareRed = true;
const isSquare = false;
const isAwesome = false;
const jsx3 = (
    <div>
        <h1>{title2 === 'Michael' ? 'Michael was here!' : 'Michael was not here!'}</h1>

        <div className={isSquareRed ? 'square-red' : 'square-green'}></div>

        {isSquare ? <div className="square">Square</div> : <div className="circle">Circle</div>}

        <div>{`This is ${isAwesome ? 'awesome' : 'not awesome'}!`}</div>
    </div>
);

const brothers = [
    { firstName: 'Almog', lastName: 'Gutin', age: 22 },
    { firstName: 'Ido', lastName: 'Gutin', age: 35 },
    { firstName: 'Amit', lastName: 'Golan-Gutin', age: 33 },
];
const jsx4 = (
    <div>
        <h1>Arrays</h1>

        <div className="parent">
            {brothers.map((brother) => {
                return (
                    <div className="child">
                        <h3>{`${brother.firstName} ${brother.lastName}`}</h3>

                        <p>{brother.age}</p>
                    </div>
                );
            })}
        </div>
    </div>
);

const SquareText = () => {
    return <span>Square Text</span>;
};

const Square = () => {
    return (
        <div
            className="square"
            onClick={() => {
                console.log('The square was pressed');
            }}
        >
            <SquareText />
        </div>
    );
};

const arr = [1, 2, 3, 4, 5];

const jsx5 = (
    <div>
        <Square />

        <h1>Components</h1>

        {arr.map(() => {
            return <Square />;
        })}
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
    // jsx5
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
