import React from "react";
import TodoItem from "./TodoItem";
import Proptypes from "prop-types";
// import Context from "../Context";
// import { useContext } from "react";
function TodoList(props) {
  const styles = {
    ul: {
      listStyle: "none",
      padding: 0,
    },
  };
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            index={index}
            onChange={props.onTogle}
          />
        );
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: Proptypes.arrayOf(Proptypes.object).isRequired,
  onTogle: Proptypes.func.isRequired,
};
export default TodoList;
