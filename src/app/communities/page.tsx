import communitiesPageStyles from "../../styles/authStyle.module.css";
import { Posts } from "@/components/Posts";

export default function CommunitiesPage() {
  return (
    <main className={communitiesPageStyles.CommunitiesWrapper}>
      <Posts />
    </main>
  );
}
