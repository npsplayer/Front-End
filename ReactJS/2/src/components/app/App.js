import React from "react";

import AppHeader from "../AppHeader";
import AppSearch from "../AppSearch";
import TodoList from "../todoList";
import ItemFilter from "../ItemFilter";
import AddItem from "../AddItem";

import "./App.css";

class App extends React.Component {
  counterId = 0;

  createTodo(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.counterId++
    };
  }

  state = {
    todoData: [
      this.createTodo("value 1"),
      this.createTodo("value 2"),
      this.createTodo("value 3"),
      this.createTodo("value 4"),
      this.createTodo("value 5")
    ],
    todoView: []
  };

  addTodo = label => {
    this.setState(prevState => {
      return {
        todoData: prevState.todoData.concat(this.createTodo(label)),
        todoView: prevState.todoData.concat(this.createTodo(label))
      };
    });
  };

  deleteItem = id => {
    this.setState(prevState => {
      return {
        todoData: prevState.todoData.filter(item => item.id !== id),
        todoView: prevState.todoData.filter(item => item.id !== id)
      };
    });
  };
  filterItemDone = () => {
    this.setState(prevState => {
      return {
        todoView: prevState.todoData.filter(item => item.done)
      };
    });
  };
  filterItemToDo = () => {
    this.setState(prevState => {
      return {
        todoView: prevState.todoData.filter(item => !item.done)
      };
    });
  };
  filterItemAll = () => {
    this.setState(prevState => {
      return {
        todoView: prevState.todoData
      };
    });
  };

  onSearch = e => {
    const value = String(e.target.value);
    this.setState(prevState => {
      return {
        todoView: prevState.todoData.filter(item =>
          item.label.includes(value)
        )
      };
    });
  };

  toggleDone = id => {
    this.setState(prevState => {
      const nextState = prevState.todoData.map(item => {
        if (item.id === id) {
          item.done = !item.done;
        }
        return item;
      });
      return {
        todoData: nextState,
        todoView: nextState
      };
    });
  };

  toggleImportant = id => {
    this.setState(prevState => {
      const nextState = prevState.todoData.map(item => {
        if (item.id === id) {
          item.important = !item.important;
        }
        return item;
      });
      return {
        todoData: nextState,
        todoView: nextState
      };
    });
  };

  componentDidMount() {
    this.setState(prevState => {
      return {
        todoView: prevState.todoData
      };
    });
  }

  render() {
    const { todoData, todoView } = this.state;
    const todo = todoData.filter(item => !item.done).length;
    const done = todoData.length - todo;
    return (
      <div className="App">
        <AppHeader toDo={todo} done={done} />
        <div className="container-search">
          <AppSearch onSearch={this.onSearch} />
          <ItemFilter
            filterItemAll={this.filterItemAll}
            filterItemDone={this.filterItemDone}
            filterItemToDo={this.filterItemToDo}
          />
        </div>

        <TodoList
          todos={todoView}
          onDelete={this.deleteItem}
          onToggle={this.toggleDone}
          onToggleImportant={this.toggleImportant}
        />
        <AddItem onAdded={this.addTodo} />
      </div>
    );
  }
}

export default App;
