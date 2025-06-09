import { Box, Button, TextField } from "@mui/material";

export default function TodoForm() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          bgcolor: "background.paper",
          p: 2,
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <TextField label="タスクを入力" variant="outlined" />
        <Button variant="outlined">追加</Button>
      </Box>
    </>
  );
}
