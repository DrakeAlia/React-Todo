import React from 'react';
// click prop
const Todo = props => {
  return (
    <div
      onClick={() => props.toggleCompleted(props.item.id)}
      className={`item${props.item.completed ? ' completed' : ''}`}
    >
      <p>{props.item.task}</p>
    </div>
  );
};

export default Todo; 