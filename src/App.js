import React, { useState, useEffect } from 'react';
import AddTodo from './components/addTodo';
import './App.css';
import Todo from './components/todoItem';
import {
    collection,
    query,
    onSnapshot,
    doc,
    updateDoc,
    deleteDoc,
} from "firebase/firestore";
import { database } from "./firebaseConf";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
      const q = query(collection(database, "todos"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let todosArr = [];
        querySnapshot.forEach((item) => {
          todosArr.push({ ...item.data(), id: item.id });
        });
        setTodos(todosArr);
      });
      return () => unsubscribe();
    }, []);
  
  
    const toggle = async (todo) => {
      await updateDoc(doc(database, "todos", todo.id), { completed: !todo.completed });
    };
    const handleDelete = async (id) => {
      await deleteDoc(doc(database, "todos", id));
    };

  return (
    <div className="App">
      <div className="title">
            <h1>Todo App</h1>
      </div>
      <AddTodo/>
    
      {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggle}
            handleDelete={handleDelete}
          />
        ))}
      
    </div>
  );
}

export default App;