import React from "react";
import Proptypes from "prop-types";
import { object } from "prop-types";
import "./todo.css";
import Context from "../Contex";
function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = React.useContext(Context);
  const clase = [];
  if (todo.completd) {
    clase.push("done");
  }
  return (
    <li className="liItem">
      <span className={clase.join(" ")}>
        <input
          className="input"
          checked={todo.completd}
          type="checkbox"
          onChange={() => onChange(todo.id)}
        />
        {"  "}
        &nbsp; <b>{index + 1}</b> &nbsp; {todo.title}
      </span>
      <button className="btn" onClick={removeTodo.bind(null, todo.id)}>
        &times;
      </button>
    </li>
  );
}

TodoItem.propTyprs = {
  todo: Proptypes.object.isRequired,
  index: Proptypes.number,
};
export default TodoItem;
