import React from 'react';
import "./AppHeader.css"
const AppHeader = ({toDo, done}) => {
    return (
        <div className="todo-list-header">
          <div className="title">Todo List</div>
          <div className="info">{toDo} more to do, {done} done</div>
        </div>
      );;
}
export default AppHeader;