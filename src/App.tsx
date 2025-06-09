import {
  AppBar,
  Box,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import type { Todo } from "./types";
import { useState } from "react";

const theme = createTheme({
  typography: {
    fontFamily: ["Ubuntu", '"Noto Sans JP"', "sans-serif"].join(","),
  },
  palette: {
    background: {
      default: "#e0e0e0",
      paper: "#fff",
    },
  },
});

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (task: string) => {
    if (!task.trim()) return; // 空のタスクは追加しない

    const newTodo: Todo = {
      id: Date.now().toString(), // 一意のIDを生成
      task: task,
      isCompleted: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h5" component="h1">
            todo-list
          </Typography>
        </Toolbar>
      </AppBar>
      {/* メインコンテナ */}
      <Box sx={{ maxWidth: "md", m: "0 auto", p: 3, mt: 7 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <TodoForm onAddTodo={handleAddTodo} />
        </Box>
        <Box
          sx={{
            bgcolor: "background.paper",
            boxShadow: 2,
            borderRadius: 2,
            p: 3,
            mt: 2,
          }}
        >
          <TodoList todos={todos} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
