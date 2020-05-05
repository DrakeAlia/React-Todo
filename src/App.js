import React from 'react';
import TodoList from './components/TodoList';



const toDoArray = [
  {
    id: 12, 
    work: 'Printing',
    done: false
  }
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor() {
      super();
      this.state = {
        toDoArray: toDoArray
      };
    }

    // for selecting the toDo

    toggleTodo = todoId => {
      this.setState({
        toDoArray: this.state.toDoArray.map(toDo => {
          if (toDo.id === todoId) {
            return {
              ...toDo,
              done: !toDo.done
            };
          }
          return toDo;
        })
      });
    };

    // adding ToDo 

    addTodo = toDoName => {
      this.setState({
        toDoArray: [
          ...this.state.toDoArray, 
          {
            work: toDoName,
            done: false,
            id: (Math.random() * Math.random()).toString(9).subtr(2, 9)
          }
        ]
      });
    };

// clear Todo 

clearTodo = () => {
  this.setState({
    toDoArray: this.state.toDoArray.filter(toDo => {
      return !toDo.done;
    })
  });
};
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList
        toDoArray={this.statetoDoArray}
        toggleTodo={this.toggleTodo}
        clearTdo={this.clearTodo}
        />
      </div>
    );
  }
}

export default App;
