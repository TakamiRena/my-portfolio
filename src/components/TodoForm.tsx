import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

type TodoFormProps = {
  onAddTodo: (task: string) => void;
};

export default function TodoForm({ onAddTodo }: TodoFormProps) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (inputValue.trim()) {
      onAddTodo(inputValue);
      setInputValue("");
    }
  };
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
        <TextField
          label="タスクを入力"
          variant="outlined"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
        />
        <Button variant="outlined" onClick={handleSubmit}>
          追加
        </Button>
      </Box>
    </>
  );
}
