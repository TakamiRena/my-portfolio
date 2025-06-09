import { Box, Button, TextField } from "@mui/material";

export default function TodoForm() {
    return (
        <>
            <Box>
                <TextField label="タスクを入力" variant="standard" />
                <Button variant="contained">追加</Button>
            </Box>
        </>
    );
}