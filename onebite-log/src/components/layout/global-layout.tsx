import { Link, Outlet } from "react-router";
import logo from "@/assets/logo.png";
import { SunIcon } from "lucide-react";
import defaultImage from "@/assets/default-avatar.jpg";

export default function GlobalLayout() {
  return (
    <div className="flex min-h-[100vh] flex-col">
      <header className="h-15 border-b">
        <div className="m-auto flex h-full w-full max-w-175 justify-between px-4">
          <Link to={"/"} className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-5" />
            <h1 className="font-bold">한입로그</h1>
          </Link>
          <div className="flex items-center gap-5">
            <div className="hover:bg-muted cursor-pointer rounded-full p-2">
              <SunIcon />
            </div>
            <img src={defaultImage} className="h-6" />
          </div>
        </div>
      </header>
      <main className="m-auto w-full max-w-175 flex-1 border-x px-4 py-6">
        <Outlet />
      </main>
      <footer className="text-muted-foreground border-t py-10 text-center">
        @yungiy
      </footer>
    </div>
  );
}
