import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';

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

export default AddTodoForm;