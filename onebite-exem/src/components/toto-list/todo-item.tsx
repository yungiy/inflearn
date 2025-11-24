import { useDeleteTodos } from "../../store/todos";
import { Button } from "../ui/button";

export default function TodoItem({
  id,
  content,
}: {
  id: number;
  content: string;
}) {
  const deleteTodo = useDeleteTodos();
  
  const handleDeleteClcik = () => {
    deleteTodo(id);
  };

  return (
    <div className="flex items-center justify-between border p-2">
      {content}
      <Button variant={"destructive"} onClick={handleDeleteClcik}>
        삭제
      </Button>
    </div>
  );
}
