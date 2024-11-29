import React, { useState } from "react";
import styled from "styled-components";

// Estilos para los componentes
const TodoContainer = styled.div`
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TodoInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const TodoButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const TodoListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TodoItem = styled.li`
  background-color: #fff;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DeleteButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #e53935;
  }
`;

const TodoList = () => {
  const [todo, setTodo] = useState(""); // Estado para el input de tarea
  const [todos, setTodos] = useState([]); // Estado para las tareas

  const addTodo = () => {
    if (todo.trim()) {
      setTodos([...todos, todo]);
      setTodo(""); // Limpiar el input después de agregar
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos); // Eliminar tarea
  };

  return (
    <TodoContainer>
      <TodoInput
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Agregar una nueva tarea"
      />
      <TodoButton onClick={addTodo}>Agregar tarea</TodoButton>
      <TodoListContainer>
        {todos.map((todoItem, index) => (
          <TodoItem key={index}>
            {todoItem}
            <DeleteButton onClick={() => deleteTodo(index)}>Eliminar</DeleteButton>
          </TodoItem>
        ))}
      </TodoListContainer>
    </TodoContainer>
  );
};

export default TodoList;
