import React from "react";
import PropTypes from "prop-types";

export const CreateInput = ({ onCreateToDoItem }) => {
  let newToDo = null;

  const createNewToDo = event => {
    event.preventDefault();
    if (newToDo.value && newToDo.value.length < 60) onCreateToDoItem("create", newToDo.value);
    event.target.reset();
  };

  return (
    <form className="form-group d-flex" onSubmit={createNewToDo}>
      <input
        type="text"
        className="form-control"
        placeholder="Enter yours todo"
        ref={node => (newToDo = node)}
      />

      <button type="submit" className="btn btn-info px-4">
        Send
      </button>
    </form>
  );
};

CreateInput.propTypes = {
  onCreateToDoItem: PropTypes.func.isRequired
};
