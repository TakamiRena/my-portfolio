import { List, Typography } from "@mui/material";
import TodoItem from "./TodoItem";
import type { Todo } from "../types";

type TodoListProps = {
  todos: Todo[];
};

export default function TodoList({ todos }: TodoListProps) {
  return (
    <List>
      {todos.length === 0 ? (
        <Typography>すべてのタスクが完了しました！</Typography>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} {...todo}></TodoItem>)
      )}
    </List>
  );
}
