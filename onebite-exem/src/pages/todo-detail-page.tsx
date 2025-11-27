import { useParams } from "react-router-dom";
import { useTodoDataById } from "../hooks/queries/use-todo-by-id";

export default function TodoDetailPage() {
  const params = useParams();
  const id = params.id;

  const { data, isLoading, error } = useTodoDataById(String(id), "DETAIL");

  if (isLoading) return <div>로딩중</div>;
  if (error || !data) return <div>에러 발생</div>;

  return <div>{data.content}</div>;
}
