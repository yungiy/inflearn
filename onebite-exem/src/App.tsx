import { Routes, Route } from "react-router-dom";
import TodoListPage from "./pages/todo-list-page";
import TodoDetailPage from "./pages/todo-detail-page";

export default function App() {
  return (
    <Routes>
      <Route path="/todolist" element={<TodoListPage />} />
      <Route path="todolist/:id" element={<TodoDetailPage />} />
    </Routes>
  );
}
