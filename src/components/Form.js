import React, { Component } from "react";

export default class Form extends Component {
  state = { id: "", name: "", completed: "" };

  render() {
    const handleChange = (e) => {
      this.setState({
        id: e.target.value,
        name: e.target.value,
        completed: false,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      if (this.state.name !== "") {
        this.props.addList(this.state);
        this.setState({ name: "" });
      }
    };

    return (
      <div className="formDiv">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your ToDo..."
            value={this.state.name}
            onChange={handleChange}
          />
        </form>
      </div>
    );
  }
}
