import TodoEditor from "./components/toto-list/todo-editor";
import TodoItem from "./components/toto-list/todo-item";
import { useTodos } from "./store/todos";

export default function App() {
  const todos = useTodos();
  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl font-bold">투두리스트</h1>
      <TodoEditor />
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
}
