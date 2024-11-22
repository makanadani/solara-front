import registerPageStyles from "../../styles/authStyle.module.css";
import { RegisterForm } from "@/components/RegisterForm";

export default function RegisterPage() {
  return (
    <main className={registerPageStyles.RegisterWrapper}>
      <RegisterForm />
    </main>
  );
}
