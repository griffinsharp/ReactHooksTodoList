import React from 'react';
import TextField from '@material-ui/core/TextField';

// first hook - useState
// takes in initial state and returns an array.
// array's first index is state's current value. the second index is an updater function.
import { useState } from 'react';



const TodoForm = ({ saveTodo }) => {
    // user ES6 destructuring assignment.
    // useState returns an array, so if we const [], we just assigned value and setValue...
    // ...to the first and second index, respectively. 
    const [value, setValue] = useState('');

    const handleSubmit = (value) => {
        return e => {
            e.preventDefault();
            
            // add to-do list item
            saveTodo(value);

            // clear input
            setValue('');
        };
    };

    return (
        <form onSubmit={handleSubmit(value)}>
            <TextField onChange={(e) => setValue(e.target.value)} value={value} variant="outlined" placeholder="Add todo" margin="normal"/>
        </form>
    );
};

export default TodoForm;