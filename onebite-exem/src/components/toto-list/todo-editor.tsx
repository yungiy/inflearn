import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { createTodo } from "../../api/create-todo";
import { useMutation } from "@tanstack/react-query";

export default function TodoEditor() {
  const { mutate, isPending } = useMutation({
    mutationFn: createTodo,
  });

  const [content, setContent] = useState("");

  const handleAddClick = () => {
    if (content.trim() === "") return;
    mutate(content);
    setContent("");
  };

  return (
    <div className="flex gap-2">
      <Input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="새로운 할일을 입력하세요"
      />
      <Button disabled={isPending} onClick={handleAddClick}>
        추가
      </Button>
    </div>
  );
}
