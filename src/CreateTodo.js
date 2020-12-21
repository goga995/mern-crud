import React from "react";
import { useHistory } from "react-router-dom";
import { createTodo } from "./api";
import { TodoForm } from "./TodoForm";

export const CreateTodo = () => {
  const history = useHistory();
  const onSubmit = async (data) => {
    await createTodo(data);
    history.push("/");
  };

  return (
    <div className="container">
      <div className="mt-3">
        <TodoForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

// Da smo imali vise inputa svakom bi bio ref={register}
// Ovde Nastavi https://www.youtube.com/watch?v=bRRA-SrNyxg
