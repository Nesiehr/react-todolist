// src/pages/App/index.js

import React, { Component } from 'react';

import AddTodoForm from '../../components/AddTodoForm';
import TodoList from '../../components/TodoList';
import CompletedTodoList from '../../components/CompletedTodoList';

import logo from './logo.svg';
import './app.css';

class App extends Component {

  constructor(props) {

    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.handleUndo = this.handleUndo.bind(this);
    this.state = {items: [], text: '', showCompleted: false};

  }

  render() {

    return (

      <div className="app">

        <div className="app-header">

          <img src={logo} className="app-logo" alt="logo" />
          <h2>Realist</h2>

        </div>

        <div className="app-body">

          <AddTodoForm addTodo={this.handleSubmit}
          changeText={this.handleChange} 
          text={this.state.text} />

          <div className="TodoLists">

            <TodoList items={this.state.items}
             showCompleted={this.state.showCompleted} 
             handleShow={this.handleShow} 
             handleHide={this.handleHide} 
             handleDelete={this.handleDelete} 
             handleComplete={this.handleComplete} />

            {this.state.showCompleted === true &&

            <CompletedTodoList items={this.state.items} 
            handleUndo={this.handleUndo} 
            handleDelete={this.handleDelete} />

            }

          </div>

        </div>

      </div>

    );
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      text: this.state.text,
      complete: false,
      id: Date.now()
    };
    if (this.state.text !== '') {
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
    } else {}
  }

  handleShow(e) {
    this.setState({showCompleted: true});
  }

  handleHide(e) {
    this.setState({showCompleted: false});
  }

  handleDelete(item) {
    const newState = this.state.items;
    if (newState.indexOf(item) > -1) {
      newState.splice(newState.indexOf(item), 1);
      this.setState({items: newState});
    }
  }

  handleComplete(item) {
    const newState = this.state.items;
    const newItem = {
      text: item.text,
      complete: true,
      id: item.id
    }
    if (newState.indexOf(item) > -1) {
      newState.splice(newState.indexOf(item), 1, newItem);
      this.setState({items: newState});
    }
  }

  handleUndo(item) {
    const newState = this.state.items;
    const newItem = {
      text: item.text,
      complete: false,
      id: item.id
    }
    if (newState.indexOf(item) > -1) {
      newState.splice(newState.indexOf(item), 1, newItem);
      this.setState({items: newState});
    }
  }

}

export default App;
