import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";
import SimpleStorage from "react-simple-storage";
const Todos = [
  {
    task: "pet sloth",
    id: 12,
    completed: false,
  },
  {
    task: "go to the moon",
    id: 13,
    completed: false,
  },
  {
    task: "learn advanced react",
    id: 14,
    completed: false,
  },
];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Todos,
    };
  }
  addTodo = (e, todo) => {
    e.preventDefault();
    const newTodo = {
      task: todo,
      id: Date.now() * Math.floor(Math.random() * 2),
      completed: false,
    };
    console.log(newTodo);
    this.setState({
      Todos: [...this.state.Todos, newTodo],
    });
  };

  toggleTodo = (todoId) => {
    console.log(todoId);
    this.setState({
      Todos: this.state.Todos.map((todo) => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  };

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      Todos: this.state.Todos.filter((todo) => !todo.completed),
    });
  };

  render() {
    return (
      <div>
        <h2>Todo List:</h2>

        <SimpleStorage parent={this} key={this.id} />
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          Todos={this.state.Todos}
          toggleTodo={this.toggleTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
