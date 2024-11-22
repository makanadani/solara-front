'use client'

import { useRouter } from "next/navigation";
import postsHeaderStyle from "./style.module.css";

export const PostsHeader = () => {
  const router = useRouter();

  function onClick () {
    router.push('/')
    // Usado para mandar o usuario para a tela de login quando ele clicar no botão
  }

  return (
    <div className={postsHeaderStyle.PostsHeader}>
      <nav>
        <ul>
          <li>
            <a href="">Categories</a>
          </li>
          <li>
            <a href="">All Posts</a>
          </li>
          <li>
            <a href="">My Posts</a>
          </li>
        </ul>
      </nav>

      <div className={postsHeaderStyle.Actions}>
        <input
          type="text"
          placeholder="Search"
          className={postsHeaderStyle.SearchInput}
        />
        <button className={postsHeaderStyle.LoginSignupButton} onClick={onClick}>
          Login / Sign up
        </button>
      </div>
    </div>
  );
};
