import { Checkbox, IconButton, ListItem, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

type TodoItemProps = {
    task: string;
    isCompleted: boolean;
}

export default function TodoItem({ task, isCompleted}: TodoItemProps) {
    return (
        <>
            <ListItem>
                <Checkbox defaultChecked={isCompleted} />
                <Typography>{task}</Typography>
                <IconButton aria-label="delete"><DeleteIcon/></IconButton>
            </ListItem>
        </>
    );
}