import Image from "next/image";

import postsContainerStyle from "./style.module.css";
import { PostsHeader } from "../PostsHeader";
import { Posts } from "../Posts";

export const PostsContainer = () => {
  return (
    <div className={postsContainerStyle.PostsContainer}>
      <PostsHeader />

      <div className={postsContainerStyle.CreateNewSection}>
        {/* 
        Nesse botão você pode colocar para abrir um modal 
        de criação de um item da lista
        */}
        <button className={postsContainerStyle.CreateNewButton}>
          Create New Post
        </button>
      </div>

      <Posts />
    </div>
  );
};
