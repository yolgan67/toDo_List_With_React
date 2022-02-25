import React, { Component } from "react";

export default class List extends Component {
  state = { filter: "" };

  render() {
    const handleDelete = (e) => {
      // console.log(e.target.id);
      const filteredDelete = this.props.todo.filter((item) => {
        return item.id + 1 !== e.target.id;
      });
      this.props.deleteItem(filteredDelete);
    };

    const filterTodo = this.props.todo.filter(
      (item) => item.completed !== this.state.filter
    );
    const CompletedLength = this.props.todo.filter(
      (item) => item.completed
    ).length;
    const UncompletedLength = this.props.todo.filter(
      (item) => !item.completed
    ).length;
    return (
      <div>
        <div id="listDiv">
          <ul>
            {filterTodo.map((item) => {
              return (
                <li
                  key={item.id}
                  className={item.completed ? "completedItem" : ""}
                >
                  <input
                    checked={item.completed}
                    onChange={() => this.props.checkedItem(item.id)}
                    className="check"
                    type="checkbox"
                  />
                  {item.name}
                  <button
                    id={item.id + 1}
                    onClick={handleDelete}
                    className="close"
                  >
                    {"\u00D7"}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div id="filterList">
          <input
            onChange={() => this.props.checkedAll()}
            id="checkAll"
            className="check "
            type="checkbox"
          />
          <label htmlFor="checkAll">
            <span>CheckedAll</span>
          </label>
          <span onClick={() => this.setState({ filter: "" })}>
            All ({this.props.todo.length})
          </span>
          <span onClick={() => this.setState({ filter: false })}>
            Completed ({CompletedLength})
          </span>
          <span onClick={() => this.setState({ filter: true })}>
            Uncompleted ({UncompletedLength})
          </span>
          <span onClick={(e) => this.props.clearAllCompleted(e)}>
            Clear Completed
          </span>
        </div>
      </div>
    );
  }
}
