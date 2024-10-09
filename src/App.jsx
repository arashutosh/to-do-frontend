import { useState, useEffect } from 'react';
import './App.css';
import './components/CreateTodo';
import CreateTodo from './components/CreateTodo';
import Todos from './components/Todos';

function App() {
  const [todos, setTodos] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async (res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch todos');
        }
        const json = await res.json();
        setTodos(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching todos:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading todos...</div>;
  }

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos.getData} />
    </div>
  );
}

export default App;
