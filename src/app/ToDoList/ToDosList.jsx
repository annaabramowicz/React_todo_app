import ToDo from './ToDo/ToDo';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getTodos } from 'store/todos/todos';

function ToDosList({ removeTodo }) {
  const todoList = useSelector(getTodos);

  return (
    <ul>
      {todoList.map((todo) => (
        <ToDo key={todo.id} todo={todo} removeOneTodo={removeTodo} />
      ))}
    </ul>
  );
}

ToDosList.propTypes = {
  todoList: PropTypes.array,
  removeToDo: PropTypes.func,
};

export default ToDosList;
