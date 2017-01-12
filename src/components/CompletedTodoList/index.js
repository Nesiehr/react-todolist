import React, {PropTypes, Component} from 'react';
import {MdUndo, MdClear} from 'react-icons/lib/md';

import './style.css'

export default class CompletedTodoList extends Component {

  render() {

    let completeItems = this.props.items.filter((item) => item.complete === true);

    return (

      <section className='todo-list'>

        <header className='todo-list-header'>

          <h2>Completed Todos</h2>
          
        </header>

        {completeItems.length === 0 ? (

          <p className='empty-todo-list'>You have completed no Todos!</p>

        ) : (
          <div>

            {completeItems.map(item => (
              <div key={item.id} className='completed-todo-list-item'>
                <MdUndo className='completed-todo-icon undo' onClick={this.props.handleUndo.bind(this,item)} />
                <p className='completed-todo-text'>{item.text}</p>
                <MdClear className='completed-todo-icon delete' onClick={this.props.handleDelete.bind(this,item)} />
              </div>
            ))}

          </div>
        )}

      </section>

    )
  }
}

CompletedTodoList.propTypes = {
  items: PropTypes.arrayOf(Object),
  handleUndo : PropTypes.func,
  handleDelete: PropTypes.func
}