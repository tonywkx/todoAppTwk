import React, { useRef, useState } from "react";
import { database } from "../firebaseConf";
import { collection, addDoc } from "firebase/firestore";

export default function AddTodo() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [files, setFiles] = useState();
  const fileInput = useRef(null);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
        await addDoc(collection(database, "todos"), {
        title,
        text,
        completed: false,
        files,
        date
      })
      setTitle("");
      setText("");
      setDate("");
      fileInput.current.value = null;
    }
  };

  const handleChange = ({target}) => {
    const fileNames  = Array.from(target.files).map(file => file.name)
    setFiles(fileNames);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          placeholder="Введите заголовок..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Введите описание..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
       <input
         type="file"
         multiple={true}
         ref={fileInput}
         onChange={handleChange}
         />
         <input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)}/>
      </div>
      <div className="btn-container">
        <button>Добавить</button>
      </div>
    </form>
  );
} 