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
  const dummyUncompleteTodos: Todo[] = [
    {
      id: "1",
      task: "買い物(tomato)",
      isCompleted: false,
    },
    { id: "2", task: "掃除", isCompleted: false },
    { id: "3", task: "洗濯", isCompleted: false },
  ];

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
          <TodoForm />
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
          <TodoList todos={dummyUncompleteTodos} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
