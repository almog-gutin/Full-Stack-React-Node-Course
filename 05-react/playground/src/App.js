import React from 'react';
import './App.css';
import Child from './Child.component';

import ComponentExample from './ComponentExample.component';
import CustomButton from './CustomButton.component';

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
        <div>
            <ComponentExample />

            {/* Props = Properties (Attributes) */}
            <CustomButton type="button" text="Click Me!" className="modern-btn" handleClick={handleClick} />

            <div className="parent">
                {brothers.map((brother) => {
                    return <Child firstName={brother.firstName} lastName={brother.lastName} age={brother.age} />;
                })}
            </div>
        </div>
    );
};

export default App;
