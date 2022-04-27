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

// Data Binding
const title = 10 * 2;
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    //     <App />
    // </React.StrictMode>
    jsx2
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
