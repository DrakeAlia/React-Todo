import React from 'react';
// imported the todo list and form
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

// pre-todos already listed 
const tasks = [
   {
  task: 'Clear out the yard',
   id: 1,
   completed: false
   },
  {
   task: 'Make some Food',
  id: 2,
  completed: false
 }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks,
      task: ''
    };
  }
// passing thru ids 
  toggleCompleted = clickedTaskId => {
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === clickedTaskId) {
          return {
            ...item,
            completed: !item.completed            
          };
        } else {
          return item;
        }
      })
    });
  }
// add the ability to remove any todos that you have completed
  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter(item => { 
        if (item.completed === true) { return false; }
         else { return true; }
      })
    })
  }

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <h2>Todo List</h2>
        <TodoForm addTask={this.addTask} />
        <TodoList
          tasks={this.state.tasks}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
