import React from "react";
import "./ListItem.css";

function ListItem(props) {
  return (
    <React.Fragment>
      <h3 className="todo">
        {props.num}. {props.item} &nbsp;
        <button className="del" onClick={e => props.handleDelete(e)}>
          Delete Item
        </button>
      </h3>
    </React.Fragment>
  );
}

export default ListItem;
