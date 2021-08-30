import PropTypes from "prop-types";
import DeleteButton from "../../../components/Buttons/IconButton/IconButton";
import Flex from "../../../components/Flex/Flex";
import React from "react";

function ToDo({ todo, removeOneTodo }) {
  const onClick = () => {
    removeOneTodo(todo.id);
  };

  return (
    <li>
      <React.Fragment>
        <Flex>
          {todo.text}
          <DeleteButton onClick={onClick}></DeleteButton>
        </Flex>
      </React.Fragment>
    </li>
  );
}

ToDo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
  }),
  removeToDo: PropTypes.func,
};

export default ToDo;
