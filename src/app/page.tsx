import { LoginForm } from "@/components/LoginForm";
import loginPageStyles from "../styles/authStyle.module.css";

export default function LoginPage() {
  return (
    <main className={loginPageStyles.LoginWrapper}>
      <LoginForm />
    </main>
  );
}
