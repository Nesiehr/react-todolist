import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';
import {MdCheck, MdClear} from 'react-icons/lib/md';

import './style.css';

class TodoList extends Component {
  render() {

    let incompleteItems = this.props.items.filter((item) => item.complete === false);

    if (incompleteItems.length === 0) {
      return (
        <section className='todo-list'>
          <header className='todo-list-header'>
            <h2>Todo List</h2>
            {this.props.showCompleted ? (
              <span onClick={this.props.handleHide}>Hide Completed</span>
            ) : (
              <span onClick={this.props.handleShow}>Show Completed</span>
            )}
          </header>
          <p className='empty-todo-list'>You have nothing Todo!</p>
        </section>
      )
    } else {
      return (
        <section className='todo-list'>
          <header className='todo-list-header'>
            <h2>Todo List</h2>
            <span>Show Completed</span>
          </header>
          {incompleteItems.map(item => (
            <div key={item.id} className='todo-list-item'>
              <MdCheck className='todo-icon check' onClick={this.props.handleComplete.bind(this,item)} />
              <p className='todo-text'>{item.text}</p>
              <MdClear className='todo-icon delete' onClick={this.props.handleDelete.bind(this,item)} />
            </div>
          ))}
        </section>
      )
    }
  }
}

export default TodoList;