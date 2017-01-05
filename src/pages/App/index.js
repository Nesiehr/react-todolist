// src/pages/App/index.js

import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import AddTodoForm from '../../components/AddTodoForm/AddTodoForm.js';
import TodoList from '../../components/TodoList/TodoList.js';

import logo from './logo.svg';
import './style.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {items: [], text: '', showCompleted: false}
  }

  render() {
    return (
      <div className="App">
        <div className="AppHeader">
          <img src={logo} className="AppLogo" alt="logo" />
          <h2>Realist</h2>
        </div>
        <div className="AppBody">
          <AddTodoForm addTodo={this.handleSubmit} changeText={this.handleChange} text={this.state.text} />
          <TodoList items={this.state.items} />
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
    if (this.state.text != '') {
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
    } else {}
  }

}

export default App;
