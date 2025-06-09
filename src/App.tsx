import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import type { Todo } from "./types";

function App() {
  const dummyTodos: Todo[] = [
    { id: "1", task: "買い物", isCompleted: false },
    { id: "2", task: "掃除", isCompleted: true },
    { id: "3", task: "洗濯", isCompleted: false },
  ];

  return (
    <>
      <h1>Todoアプリ</h1>
      <TodoForm />
      <TodoList todos={dummyTodos} />
    </>
  );
}

export default App;
