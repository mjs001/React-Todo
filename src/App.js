import React from "react";
import Todo from "./components/Todo";
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
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
