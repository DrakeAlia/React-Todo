// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            <div className='toDoList'>
                {props.toDoArray.map(toDo => (
                    <Todo key={toDo.id} toDo={toDo} toggleTodo={props.toggleTodo} />
                ))}
            </div>
            <button className='clear-btn' onClick={props.clear}>
                Clear the Todo
            </button>
        </div>
    );
};

export default TodoList;