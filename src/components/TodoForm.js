import React from 'react';

class TodoForm extends React.Component {

  // constructor with state

  constructor(props) {
    super(props);
    this.state = {
      toDoName: ''
    };
  }
  handleChanges = event => {
    this.setState({ toDoName: event.target.value });
  };

  handleAddItem = event => {
    event.preventDefault();
    this.props.addTodo(this.state.toDoName);
  };

  render() {
    return (
      <form onSubmit={this.handleAddItem}>
        <input
          type='text'
          name='toDoName'
          value={this.state.toDoName}
          onChange={this.handleChanges}
        />
        <button>Add Here</button>
      </form>
    );
  }
}

export default TodoForm;