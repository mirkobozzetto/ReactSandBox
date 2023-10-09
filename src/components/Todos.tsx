import { useEffect, useState } from "react";
type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data: Todo[] = await res.json();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  return (
    <>
      <h1>Hello React</h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.title}</h2>
        </div>
      ))}
    </>
  );
};

export default Todos;
