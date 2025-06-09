import { Box, Checkbox, IconButton, ListItem, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import type { Todo } from "../types";

export default function TodoItem({ id, task, isCompleted }: Todo) {
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
        </Box>
        <IconButton aria-label="delete" size="small">
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </>
  );
}
