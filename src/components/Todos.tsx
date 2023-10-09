import { useEffect, useState } from "react";
type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]); // Ici, nous utilisons le type Todo

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data: Todo[] = await res.json(); // Et ici aussi
      setTodos(data); // Nous avons également ajouté cette ligne pour mettre à jour l'état
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
