import React from "react";
import TodoListItem from "../todoListItem";

import "./todoList.css";

const TodoList = ({ todos, onDelete, onToggle, onToggleImportant }) => {
  const items = todos.map(item => {
    const { id, ...itemProps } = item;
    return (
      <TodoListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggle={() => onToggle(id)}
        onToggleImportant={() => onToggleImportant(id)}
      />
    );
  });

  return (
    <div className="list">
      <ul className="todo-items">{items}</ul>
    </div>
  );
};

export default TodoList;
