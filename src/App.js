import React, { Component } from 'react';
import './App.css';
import FirstComponent from './components/learning-practise/FirstComponent';
import SecondComponent from './components/learning-practise/SecondComponent';
import ThirdComponent from './components/learning-practise/ThirdComponent';
import TodoApp from './components/todo/TodoApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoApp></TodoApp>
      </div>
    );
  }
}

class LearningComponent extends Component {
  render() {
    return (
      <div className="learningComponent">
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}
export default App;
