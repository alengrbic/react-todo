import React, { Component } from "react";
import "./ChildInp.css";

export class ChildInp extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input
            className="inp"
            placeholder="Enter a to-do..."
            value={this.props.val}
            type="text"
            onChange={this.props.onChangeInput}
          />
        </form>
      </div>
    );
  }
}

export default ChildInp;
