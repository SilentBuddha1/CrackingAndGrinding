import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Features/todo/todoSlices';

export default function AddForm() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return; 
    dispatch(addTodo(task));
    setTask('');
  };

  return (
    <form
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#fff0f0',
        width: '300px',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      }}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        ref={inputRef}
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        style={{
          flexGrow: 1,
          marginRight: '10px',
          padding: '5px',
          borderRadius: '3px',
          border: '1px solid #ccc',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '5px 10px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer',
        }}
      >
        Add
      </button>
    </form>
  );
}
