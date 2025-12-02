import { Link } from "react-router";
import { useUpdateTodoMutation } from "../../hooks/mutations/use-update-todo-mutaion";
import { Button } from "../ui/button";
import { useDeleteTodoMutaion } from "../../hooks/mutations/use-delete-todo-mutaion";
import { useTodoDataById } from "../../hooks/queries/use-todo-by-id";

export default function TodoItem({ id }: { id: string }) {
  const { data: todo } = useTodoDataById(id, "LIST");
  if (!todo) throw new Error("TODO DATA UNDEFINED");
  const { content, isDone } = todo;

  const { mutate: deleteTodo, isPending: isDeleteTodoPending } =
    useDeleteTodoMutaion();

  const { mutate: updateTodo } = useUpdateTodoMutation();
  const handleDeleteClick = () => {
    deleteTodo(id);
  };

  const handleCheckboxClick = () => {
    updateTodo({
      id,
      isDone: !isDone,
    });
  };

  return (
    <div className="flex items-center justify-between rounded-md border p-2">
      <div className="flex items-center gap-5">
        <input
          disabled={isDeleteTodoPending}
          onClick={handleCheckboxClick}
          type={"checkbox"}
          checked={isDone}
        />
        <Link to={`/todolist/${id}`}>{content}</Link>
      </div>
      <Button
        disabled={isDeleteTodoPending}
        onClick={handleDeleteClick}
        variant={"destructive"}
      >
        삭제
      </Button>
    </div>
  );
}
