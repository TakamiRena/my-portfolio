import { Box, Checkbox, IconButton, ListItem, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import type { Todo } from "../types";

type TodoItemProps = {
  todo: Todo;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TodoItem({
  todo,
  onToggleComplete,
  onDelete,
}: TodoItemProps) {
  const { id, task, isCompleted } = todo;

  return (
    <>
      <ListItem
        sx={{
          display: "flex",
          alignItems: "center",
          p: 1,
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
            minWidth: 0,
          }}
        >
          <Checkbox
            checked={isCompleted}
            sx={{ p: 1 }}
            onChange={() => onToggleComplete(id)}
          />
          <Typography
            sx={{
              flexGrow: 1,
              whiteSpace: "nowrap",
              overflowX: "auto",
              textDecoration: isCompleted ? "line-through" : "none",
              color: isCompleted ? "text.secondary" : "text.primary",
            }}
          >
            {task}
          </Typography>
        </Box>
        <IconButton
          aria-label="delete"
          size="small"
          onClick={() => onDelete(id)}
        >
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </>
  );
}
