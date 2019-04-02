import React from "react";
import PropTypes from "prop-types";

export const ToDoItem = ({ todo, onUpdateToDoItem, onCreateToDoItem }) => {
  const { id, title, completed, edit } = todo;
  const isCompleted = completed ? "line-through" : "none";
  let newToDo = null;

  return (
    <li className="list-group-item item-li">
      <div className="d-flex align-items-center col-md-9">
        <label className="form-check-label">
          <input
            className="form-check-input"
            type="checkbox"
            checked={completed}
            disabled={edit}
            onChange={() => onUpdateToDoItem("checked", id)}
          />
        </label>

        {edit ? (
          <input
            type="text"
            className="item-input form-control"
            defaultValue={title}
            ref={node => (newToDo = node)}
          />
        ) : (
          <h3 style={{ textDecoration: isCompleted }}>{title}</h3>
        )}
      </div>

      <div className="d-flex justify-content-between">
        {edit && (
          <button
            type="button"
            className="btn btn-success"
            onClick={() => onCreateToDoItem("update", newToDo.value, id)}
          >
            Save
          </button>
        )}

        {!completed && (
          <button
            type="button"
            className="btn btn-success"
            onClick={() => onUpdateToDoItem("edit", id)}
          >
            Edit
          </button>
        )}

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onUpdateToDoItem("delete", id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

ToDoItem.protoType = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};
