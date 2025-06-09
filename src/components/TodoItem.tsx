import { Box, Checkbox, IconButton, ListItem, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

type TodoItemProps = {
  task: string;
  isCompleted: boolean;
};

export default function TodoItem({ task, isCompleted }: TodoItemProps) {
  return (
    <>
      <ListItem
        sx={{
          display: "flex",
          alignItems: "center",
          p: 1,
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
          <Checkbox defaultChecked={isCompleted} sx={{ p: 1 }} />
          <Typography
            sx={{
              flexGrow: 1,
              whiteSpace: "nowrap",
              overflowX: "auto",
            }}
          >
            {task}
          </Typography>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Box>
      </ListItem>
    </>
  );
}
