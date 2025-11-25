import { useQuery } from "@tanstack/react-query";
import { FetchTodoById } from "../../api/fetch-todo-by-id";

export function useTodoDataById(id: string) {
  return useQuery({
    queryFn: () => FetchTodoById(id),
    queryKey: ["todos", id],

    staleTime: 4000
  });
}
