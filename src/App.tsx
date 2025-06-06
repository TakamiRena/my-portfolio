import "./App.css";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <>
      <TodoItem task="歯科受診" isCompleted={false} />
      <TodoForm />
    </>
  );
}

export default App;
