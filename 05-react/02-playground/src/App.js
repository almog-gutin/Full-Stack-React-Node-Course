import React from 'react';
import './App.css';

import ComponentExample from './components/component-example/ComponentExample.component';
import CustomButton from './components/custom-button/CustomButton.component';
import Child from './components/child/Child.component';
import ComponentChildren from './components/component-children/ComponentChildren.component';
import UseStateExample from './hooks/01-usestate/UseStateExample.component';
import UsestateExercise from './exercises/usestate-exercise/UsestateExercise.component';
import UseReducerExample from './hooks/02-usereducer/UseReducerExample.component';
import UseEffectExample from './hooks/03-useEffect-example/UseEffectExample.component';

const App = () => {
    const handleClick = () => {
        console.log('This button was pressed on!');
    };

    const brothers = [
        { firstName: 'Almog', lastName: 'Gutin', age: 22 },
        { firstName: 'Ido', lastName: 'Gutin', age: 35 },
        { firstName: 'Amit', lastName: 'Golan-Gutin', age: 33 },
    ];

    return (
        <div className="App">
            {/* <ComponentExample /> */}

            {/* Props = Properties (Attributes) */}
            <CustomButton type="button" text="Click Me!" className="modern-btn" handleClick={handleClick} />

            <div className="parent">
                {brothers.map((brother) => {
                    return <Child firstName={brother.firstName} lastName={brother.lastName} age={brother.age} />;
                })}
            </div>

            <ComponentChildren className="children-component">
                This is an example of closing component tags
            </ComponentChildren>

            <ComponentChildren className="children-component">
                <h5>Child 1</h5>

                <h5>Child 2</h5>
            </ComponentChildren>

            <UseStateExample />

            <UsestateExercise />

            <UseReducerExample />

            <UseEffectExample />
        </div>
    );
};

export default App;
