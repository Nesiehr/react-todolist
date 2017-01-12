import React, {PropTypes, Component} from 'react';
import {MdCheck, MdClear} from 'react-icons/lib/md';

import './style.css';

export default class TodoList extends Component {

  render() {

    let incompleteItems = this.props.items.filter((item) => item.complete === false);

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

        {incompleteItems.length === 0 ? (

          <p className='empty-todo-list'>You have nothing Todo!</p>

        ) : (

          <div>

            {incompleteItems.map(item => (
              <div key={item.id} className='todo-list-item'>
                <MdCheck className='todo-icon check' onClick={this.props.handleComplete.bind(this,item)} />
                <p className='todo-text'>{item.text}</p>
                <MdClear className='todo-icon delete' onClick={this.props.handleDelete.bind(this,item)} />
              </div>
            ))}

          </div>

        )}

      </section>

    )

  }

}

TodoList.propTypes = {
  items: PropTypes.arrayOf(Object),
  showCompleted: PropTypes.bool,
  handleShow: PropTypes.func,
  handleHide: PropTypes.func,
  handleComplete: PropTypes.func,
  handleDelete: PropTypes.func
}