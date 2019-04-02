import React, { Component } from "react";
import v4 from "uuid/v4";
import { ToDoItem } from "./ToDoItem";
import { CreateInput } from "./CreateInput";

class MainContainer extends Component {
  state = {
    toDoList: [
      { id: v4(), title: "Make my wife happy", completed: false, edit: false },
      { id: v4(), title: "Eating breakfast", completed: false, edit: false },
      { id: v4(), title: "Bay some food", completed: false, edit: false }
    ]
  };
  handleUpdateToDoItem = (action, id) => {
    let toDoList = this.state.toDoList;

    if (action === "checked") {
      toDoList = this.state.toDoList.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      });
    }

    if (action === "delete") {
      toDoList = this.state.toDoList.filter(todo => todo.id !== id);
    }

    if (action === "edit") {
      toDoList = this.state.toDoList.map(todo => {
        if (todo.id === id) todo.edit = !todo.edit;
        return todo;
      });
    }

    this.setState({
      toDoList: toDoList
    });
  };

  handleCreateToDoItem = (action, newTitle, id) => {
    let toDoList = this.state.toDoList;
    if (action === "create") {
      toDoList = [
        ...this.state.toDoList,
        { id: v4(), title: newTitle, completed: false, edit: false }
      ];
    }
    if (action === "update") {
      toDoList = this.state.toDoList.map(todo => {
        if (todo.id === id) {
          todo.edit = !todo.edit;
          todo.title = newTitle;
        }
        return todo;
      });
    }
    this.setState({
      toDoList: toDoList
    });
  };

  render() {
    const { toDoList } = this.state;

    return (
      <div className="container">
        <h1 className="text-center my-5">Create your ToDo List</h1>

        <CreateInput onCreateToDoItem={this.handleCreateToDoItem} />

        <ul className="list-group">
          {toDoList.map(todo => (
            <ToDoItem
              key={todo.id}
              todo={todo}
              onUpdateToDoItem={this.handleUpdateToDoItem}
              onCreateToDoItem={this.handleCreateToDoItem}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default MainContainer;
