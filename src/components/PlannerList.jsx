import React from "react";
import ListItem from "./ListItem";
import "./PlannerList.css";

class PlannerList extends React.Component {
  render() {
    return (
      <div className="list">
        {this.props.list.map((e, index) => {
          return (
            <React.Fragment key={index + 200}>
              <ListItem
                key={index}
                list={this.props.list}
                item={e}
                handleDelete={this.props.handleDelete}
                num={index + 1}
              />
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default PlannerList;
