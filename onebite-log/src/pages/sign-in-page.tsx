import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router";
import { useSignInWithPassword } from "@/hooks/mutations/use-sign-in-with-password";
import GithubLogo from "@/assets/github-mark.svg";
import { useSignInWithOAuth } from "@/hooks/mutations/use-sign-in-with-oauth";
import { toast } from "sonner";

export default function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: signInWithPassword } = useSignInWithPassword({
    onError: (error) => {
      toast.error(error.message, { position: "top-center" });
      setPassword("");
    },
  });
  const { mutate: signInWithOAuth } = useSignInWithOAuth();

  const handleSignInClick = () => {
    // 공백 입력값 검증
    if (email.trim() === "") return;
    if (password.trim() === "") return;

    signInWithPassword({
      email,
      password,
    });
  };

  const handleSignInWithGithubClick = () => {
    signInWithOAuth("github"); // 1개의 인수인 github를 넣음
  };
  return (
    <div className="flex flex-col gap-8">
      <div className="text-xl font-bold">로그인</div>
      <div className="flex flex-col gap-2">
        <Input
          className="py-6"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="example@abc.com"
        />
        <Input
          className="py-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Button className="w-full" onClick={handleSignInClick}>
          로그인
        </Button>
        <Button
          className="w-full"
          onClick={handleSignInWithGithubClick}
          variant={"outline"}
        >
          <img src={GithubLogo} alt="깃허브 로고" className="h-4 w-4" />
          Github 계정으로 로그인
        </Button>
      </div>
      <div>
        <Link className="text-muted-foreground hover:underline" to={"/sign-up"}>
          계정이 없다면? 회원가입
        </Link>
      </div>
    </div>
  );
}
