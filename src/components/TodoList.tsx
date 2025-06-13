import { List, Typography } from "@mui/material";
import TodoItem from "./TodoItem";
import type { Todo } from "../types";

type TodoListProps = {
  todos: Todo[];
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TodoList({
  todos,
  onToggleComplete,
  onDelete,
}: TodoListProps) {
  return (
    <List>
      {todos.length === 0 ? (
        <Typography>すべてのタスクが完了しました！</Typography>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
          />
        ))
      )}
    </List>
  );
}
