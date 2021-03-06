import React from 'react';

class TodoForm extends React.Component {  
  constructor() {
    super();
    this.state = {
      item: ''
    };
  }
// call your handler function that will filter out any todos that have the completed flag toggled to true
  handleChanges = e => {    
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.item);
    this.setState({
      item: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>        
        <input
          type="text"
          name="item"
          value={this.state.item}
          onChange={this.handleChanges}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm; 