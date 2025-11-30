import TodoEditor from "../components/todo-list/todo-editor";
import TodoItem from "../components/todo-list/todo-item";
import { useTodosData } from "../hooks/queries/use-todos-data";

export default function TodoListPage() {
  //커스텀 훅을 사용한 react-query 사용
  const { data: todoIds, isLoading, error } = useTodosData();

  if (error) return <div>에러 발생</div>;
  if (isLoading) return <div>로딩중..</div>;

  // react-query 사용
  /*
  const { data:todos, isLoading, error } = useQuery({
    queryFn: fetchTodos,
    queryKey: ["todos"],
    retry: 0 // 재시도 횟수 0
  });

  if (error) return <div>에러 발생</div>;
  if (isLoading) return <div>로딩중..</div>;
  */

  // react-query를 사용하지 않을 때
  /*
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await fetchTodos();
      setTodos(data);
    } catch (error) {
      setError(error as any);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (fetchData(), []);
  });
*/

  return (
    <div className="flex max-w-sm flex-col gap-5 p-5">
      <h1 className="text-2xl font-bold">TodoList</h1>
      <TodoEditor />
      {/* {todos?.map((todo) => <TodoItem key={todo.id} {...todo} />)} */}
      {todoIds?.map((id) => (
        <TodoItem key={id} id={id} />
      ))}
    </div>
  );
}
