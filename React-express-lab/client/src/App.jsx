import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:3000/api/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!title.trim()) return;

    await axios.post("http://localhost:3000/api/tasks", {
      title,
    });

    setTitle("");
    fetchTasks();
  };

  const toggleTask = async (id) => {
    await axios.patch(`http://localhost:3000/api/tasks/${id}/toggle`);
    fetchTasks();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Manager </h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            onClick={() => toggleTask(task.id)}
            style={{
              cursor: "pointer",
              textDecoration: task.done ? "line-through" : "none",
            }}
          >
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
