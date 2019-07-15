import React, { Component } from "react";
import "./App.css";
import ChildInp from "./ChildInp";
import PlannerList from "./PlannerList";

export class App extends Component {
  state = {
    text: "",
    list: []
  };

  onChangeInput = event => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      list: [...this.state.list, this.state.text],
      text: ""
    });
  };

  handleDelete = listItem => {
    const list = this.state.list;
    list.splice(listItem, 1);
    this.setState({ list });
  };

  render() {
    if (this.state.list.length === 0) {
      return (
        <div className="container">
          <h1>Your list is empty, start by adding something</h1>
          <ChildInp
            className="inp"
            val={this.state.text}
            handleSubmit={this.handleSubmit}
            onChangeInput={this.onChangeInput}
          />
          <PlannerList
            handleDelete={this.handleDelete.bind(this)}
            list={this.state.list}
            key={this.state.list.index}
          />
        </div>
      );
    } else {
      return (
        <div className="container">
          <h1>Things to do: {this.state.list.length}</h1>
          <ChildInp
            val={this.state.text}
            handleSubmit={this.handleSubmit}
            onChangeInput={this.onChangeInput}
          />
          <PlannerList
            handleDelete={this.handleDelete.bind(this)}
            list={this.state.list}
            key={this.state.list.index}
          />
        </div>
      );
    }
  }
}

export default App;
