import type { Route } from "./+types/login";
import LoginForm from "~/components/LoginForm";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login" },
    { name: "description", content: "Log in to your account." },
  ];
}

export default function Login() {
  return <LoginForm />;
}
