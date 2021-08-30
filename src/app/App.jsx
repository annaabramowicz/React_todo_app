// import "./App.css";
import "../reset.css";
import React from "react";
import ToDoInput from "./ToDoInput/ToDoInput";
import AddButton from "./AddButton/AddButton";
import ToDosList from "./ToDoList/ToDosList";
import ClearAllButton from "./ClearAllButton/ClearAllButton";
import CurrentNumberOfTodos from "./CurrentNumberOfTodos/CurrentNumberOfTodos";
import { useState } from "react";
import {
  addTodo,
  removeAllTodos,
  getTodos,
  removeTodo,
} from "store/todos/todos";
import { useDispatch, useSelector } from "react-redux";
import Flex from "../components/Flex/Flex";
import Heading from "../components/Heading/Heading";

function App() {
  const [currentInputValue, setCurrentInputValue] = useState("");
  // const [todoLista, setTodoList] = useState([]);
  const dispatch = useDispatch();
  const todosList = useSelector(getTodos);

  const getNewId = () => `${new Date().getTime()}`;

  const isButtonDisabled = !currentInputValue.trim();

  const removeOneTodo = (todoId) => {
    dispatch(removeTodo(todosList.filter((todo) => todo.id !== todoId)));

    // setTodoList((currentTodoList) =>
    //   currentTodoList.filter((todo) => todo.id !== todoId)
    // );
  };

  const onAddButtonClick = () => {
    const newTodo = {
      id: getNewId(),
      text: currentInputValue,
    };
    dispatch(addTodo(newTodo));
  };
  const removeAllTodo = () => {
    dispatch(removeAllTodos());
    // setTodoList([]);
  };

  return (
    <React.Fragment>
      <Flex
        direction="column"
        background="gray.100"
        height="auto"
        wight="200"
        p="10"
      >
        <Heading>React To Do App</Heading>
        <section>
          <Flex w="300px" p={7}>
            <ToDoInput
              setValue={setCurrentInputValue}
              currentInputValue={currentInputValue}
            />
            <AddButton
              onButtonClick={onAddButtonClick}
              isDisabled={isButtonDisabled}
            />
          </Flex>
        </section>
        <CurrentNumberOfTodos />
        <ToDosList removeTodo={removeOneTodo} />
        <ClearAllButton removeAll={removeAllTodo} />
      </Flex>
    </React.Fragment>
  );
}

export default App;
