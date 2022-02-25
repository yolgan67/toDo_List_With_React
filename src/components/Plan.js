import React, { Component } from "react";
import Form from "./Form";
import List from "./List";

export default class Plan extends Component {
  constructor() {
    super();
    this.state = {
      todo: [
        { id: "React Calışılacak", name: "React Calışılacak", completed: true },
        {
          id: "Proje Bitirilecek",
          name: "Proje Bitirilecek",
          completed: false,
        },
        { id: "Kitap oku", name: "Kitap oku", completed: true },
        {
          id: "Alış-veriş yapılacak",
          name: "Alış-veriş yapılacak",
          completed: false,
        },
      ],
    };
  }
  componentDidMount() {
    this.getLocalStorage();
  }
  componentDidUpdate(prevProps, prevState) {
    this.setLocalStorage();
  }

  setLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(this.state.todo));
  };
  getLocalStorage = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      this.setState({ todo: JSON.parse(localStorage.getItem("todos")) });
    }
  };
  render() {
    const deleteItem = (param) => {
      this.setState({ todo: param });
    };

    const clearAllCompleted = (param) => {
      let completedItems = this.state.todo.filter(
        (item) => item.completed !== true
      );
      this.setState({ todo: completedItems });
    };

    const addList = (param) => {
      this.setState({ todo: [...this.state.todo, param] });
    };

    const checkedItem = (param) => {
      this.state.todo.map((item) => {
        if (item.id === param) {
          return (item.completed = !item.completed);
        }
        return this.setState({ completed: item.completed });
      });
    };

    const checkedAll = () => {
      if (this.state.todo.every((item) => item.completed) === false) {
        this.state.todo.map((item) => {
          return (
            (item.completed = true),
            this.setState({ completed: item.completed })
          );
        });
      } else {
        this.state.todo.map((item) => {
          return (
            (item.completed = false),
            this.setState({ completed: item.completed })
          );
        });
      }
    };

    return (
      <div className="container">
        <div className="header">
          <span> ToDo List With React </span>
          <Form addList={addList} />
        </div>
        <div>
          <List
            todo={this.state.todo}
            deleteItem={deleteItem}
            checkedItem={checkedItem}
            checkedAll={checkedAll}
            clearAllCompleted={clearAllCompleted}
          />
        </div>
      </div>
    );
  }
}
