import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useSelector } from "react-redux";
import Clear from "./components/Clear";

function App() {
  const data = useSelector((state) => {
    return state.users;
  });
  return (
    <>
      <TodoForm />
      {data.map((ele, idx) => {
        return <TodoList msg={ele} key={idx} id={idx} />;
      })}
      <Clear/>
    </>
  );
}

export default App;
