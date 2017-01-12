import React, { PropTypes, Component } from 'react';

import './AddTodoForm.css';

class AddTodoForm extends Component {
  render() {
    return (
      <form className='add-todo-form' onSubmit={this.props.addTodo}>
        <input type='text' className='add-todo-input' autoFocus='true' onChange={this.props.changeText} value={this.props.text}></input>
        <button className='add-todo-button'>+</button>
      </form>
    )
  }
}

AddTodoForm.propTypes = {
  addTodo: PropTypes.func,
  changeText: PropTypes.func,
  text: PropTypes.string
}

export default AddTodoForm;