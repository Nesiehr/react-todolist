import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

import './style.css';

class TodoList extends Component {
  render() {
    return (
      <section className='todo-list'>
        <header className='todo-list-header'>
          <h2>Todo List</h2>
          <span>Show Completed</span>
        </header>
        {this.props.items.map(item => (
          <div key={item.id} className='todo-list-item'>
            <p>{item.text}</p>
          </div>
        ))}
      </section>
    )
  }
}

export default TodoList;