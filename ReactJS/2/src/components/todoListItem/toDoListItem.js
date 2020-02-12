import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faExclamation } from "@fortawesome/free-solid-svg-icons";
import "./todoItem.css";

class TodoListItem extends React.Component {
  render() {
    const {
      label,
      onDelete,
      done,
      important,
      onToggle,
      onToggleImportant
    } = this.props;

    let classNames = "todo-item";

    if (done) {
      classNames += " done";
    }
    if (important) {
      classNames += " important";
    }
    return (
      <li className={classNames}>
        <div className="todo-item-text" onClick={onToggle}>
          {label}
        </div>

        <div className="container-todo-btn">
          <button className="todo-btn delete" onClick={onDelete}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button className="todo-btn important" onClick={onToggleImportant}>
            <FontAwesomeIcon icon={faExclamation} />
          </button>
        </div>
      </li>
    );
  }
}
export default TodoListItem;
