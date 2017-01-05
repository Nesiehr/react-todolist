import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';
import {MdCheck, MdClear} from 'react-icons/lib/md';

import './style.css';

class TodoList extends Component {
  render() {
    if (this.props.items.length == 0) {
      return (
        <section className='todo-list'>
          <header className='todo-list-header'>
            <h2>Todo List</h2>
            <span>Show Completed</span>
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
          {this.props.items.map(item => (
            <div key={item.id} className='todo-list-item'>
              <MdCheck className='todo-icon check' title='complete' />
              <p className='todo-text'>{item.text}</p>
              <MdClear className='todo-icon delete' />
            </div>
          ))}
        </section>
      )
    }
  }
}

export default TodoList;