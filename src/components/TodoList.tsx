import { Box, List, Typography } from "@mui/material";
import TodoItem from "./TodoItem";
import type { Todo } from "../types";

type TodoListProps = {
  todos: Todo[];
};

export default function TodoList({ todos }: TodoListProps) {
  return (
    <List>
      {todos.length === 0 ? (
        <Box>
          <Typography>すべてのタスクが完了しました！</Typography>
        </Box>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            task={todo.task}
            isCompleted={todo.isCompleted}
          ></TodoItem>
        ))
      )}
    </List>
  );
}
