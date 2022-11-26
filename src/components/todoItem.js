import React,{useState} from "react";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import DeleteIcon from "@mui/icons-material/Delete";
import dayjs from 'dayjs';

export default function Todo({ todo, toggleComplete, handleDelete}) {
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newText, setNewText] = useState(todo.text);
  
  const handleChangeTitle =  (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);  
    } else {
      todo.title = "";
      setNewTitle(e.target.value); 
    }   
  };
  const handleChangeText = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewText(todo.text);  
    } else {
      todo.text = "";
      setNewText(e.target.value); 
    }   
  };

  return (
    <div className="todo-wrapper">
        <div className="todo">
      <input
        style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        className="list"
        onChange={handleChangeTitle}
      />
          <input
        style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        value={todo.text === "" ? newText : todo.text}
        className="list-text"
        onChange={handleChangeText}
      />
      <div className="file-container">{todo.files}</div>
       {
            dayjs().isBefore(dayjs(todo.date)) ?  <div className="date">{todo.date}</div> :  <div className="passed">Срок выполнения истек</div>
        }
    </div>
    <div className="icon-container">
      <button
        className="button-complete"
        onClick={() => toggleComplete(todo)}
      >
        <TaskAltIcon id="i" />
      </button>
      <button className="button-delete" onClick={() => handleDelete(todo.id)}>
        <DeleteIcon id="i" />
      </button>
    </div>
    </div>
  );
}