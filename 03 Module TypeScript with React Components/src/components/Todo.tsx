import { useState } from "react";

// Define the type for a todo item
type todoTypes = {
  title: string;
  isDone: boolean;
};

// TodoItem component
const TodoItem = ({ todo, toggleTodo }: { todo: todoTypes; toggleTodo: () => void }) => {
  return (
    <li>
      <span style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>
        {todo.title}
      </span>
      <button onClick={toggleTodo}>
        {todo.isDone ? "UNDO" : "DONE"}
      </button>
    </li>
  );
};

// TodoApp component
export const TodoApp = () => {
  const [title, setTitle] = useState<string>(""); // State for new todo title
  const [todos, setTodos] = useState<todoTypes[]>([]); // State for list of todos

  // Function to add a new todo
  const addTodo = () => {
    if (title.trim() !== "") {  // Ensure the title is not empty
      setTodos([...todos, { title, isDone: false }]); // Add new todo to the list
      setTitle(""); // Clear the input field after adding
    }
  };

  // Function to toggle the done status of a todo
  const toggleTodo = (index: number) => {
    setTodos(todos.map((todo, i) => i === index ? { ...todo, isDone: !todo.isDone } : todo));
  };

  return (
    <>
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="Enter the title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            toggleTodo={() => toggleTodo(index)}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoApp;
