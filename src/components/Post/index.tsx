import Image from "next/image";

import postStyles from "./style.module.css";
import { FaRegEye } from "react-icons/fa6";
import { FaRegCommentAlt } from "react-icons/fa";

export interface CompanyProps { // substituir cada valor pelo nome exato da string sendo recebida, exemplo "NOME_EMPRESA...."
  id?: number;
  title: string;
  img_src?: string;
  description: string;
  qtd_views?: number;
  qtd_comments?: number;
}

export const Post = ({
  title,
  img_src,
  description,
  qtd_comments = 0,
  qtd_views = 0,
}: CompanyProps) => {
  return (
    <div className={postStyles.Post}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {img_src && <Image src={img_src} alt="" width={100} height={60} />}

        <div className={postStyles.PostContent}>
          <h3 className={postStyles.Title}>{title}</h3>

          <p className={postStyles.Description}>{description}</p>
        </div>
      </div>

      <div className={postStyles.ButtonsContainer}>
        <button className={postStyles.Button}>
          <FaRegEye /> {qtd_views}
        </button>
        <button className={postStyles.Button}>
          <FaRegCommentAlt /> {qtd_comments}
        </button>
      </div>
    </div>
  );
};
