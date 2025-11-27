import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { Todo } from "../../types";
import { fetchTodos } from "../../api/fetch-todos";
import { QUERY_KEYS } from "../../lib/constants";

export function useTodosData() {
  const queryClient = useQueryClient();

  return useQuery({
    // 캐시데이터 정규화 전
    //queryFn: fetchTodos,

    //캐시데이터 정규화 후
    queryFn: async () => {
      const todos = await fetchTodos();

      todos.forEach((todo: any) => {
        queryClient.setQueryData<Todo>(QUERY_KEYS.todo.detail(todo.id), todo);
      });
      return todos.map((todo: any) => todo.id);
    },
    queryKey: QUERY_KEYS.todo.list,
  });
}
