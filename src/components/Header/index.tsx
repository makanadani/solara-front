import Image from "next/image";
import styles from "./style.module.css";

export const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Logo}>
        <Image
          src="/EcoMindsLogoWithoutTitle.png"
          alt="EcoMinds"
          width={48}
          height={48}
        />
        <h2 className={styles.Ecominds}>
          Eco<span>Minds</span>
        </h2>
      </div>

      <nav>
        <ul>
          <li>
            <a href="/s">Empresas</a>
          </li>
          <li>
            <a href="/communities">Comunidades</a>
          </li>
          <li>
            <a href="/s/members">Integrantes</a>
          </li>
          <li>
            <a href="/s/about">Sobre</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <a href="/register">Cadastro</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
