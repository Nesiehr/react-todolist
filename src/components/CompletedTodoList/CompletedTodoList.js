import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

import {MdUndo, MdClear} from 'react-icons/lib/md';

import './style.css'

class CompletedTodoList extends Component {
  render() {

    let completeItems = this.props.items.filter((item) => item.complete === true);

    if (completeItems.length === 0) {
      return (
        <section className='todo-list'>
          <header className='todo-list-header'>
            <h2>Completed Todos</h2>
          </header>
          <p className='empty-todo-list'>You have completed no Todos!</p>
        </section>
      )
    } else {
      return (
        <section className='todo-list'>
          <header className='todo-list-header'>
            <h2>Completed Todos</h2>
          </header>
          {completeItems.map(item => (
            <div key={item.id} className='completed-todo-list-item'>
              <MdUndo className='completed-todo-icon undo' onClick={this.props.handleUndo.bind(this,item)} />
              <p className='completed-todo-text'>{item.text}</p>
              <MdClear className='completed-todo-icon delete' onClick={this.props.handleDelete.bind(this,item)} />
            </div>
          ))}
        </section>
      )
    }
  }
}

export default CompletedTodoList;