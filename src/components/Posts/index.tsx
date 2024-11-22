"use client";

import { useEffect, useState } from "react";
import { Post } from "../Post";
import postsStyles from "./style.module.css";

export interface EmpresaProps {
  id: number;
  title: string;
  description: string;
  img_src: string;
  qtd_comments: number;
  qtd_views: number;
}

export const Posts = () => {
  const [empresas, setEmpresas] = useState<EmpresaProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchEmpresas = async () => {
    try {
      console.log("Iniciando requisição para API...");
      const response = await fetch(
        "https://c2e8-2804-7f0-b300-8dca-ee9a-9770-bcd6-e484.ngrok-free.app/solara-java/rest/empresas"
      );

      console.log("Response Status:", response.status);

      const responseText = await response.text();
      console.log("Response Text:", responseText);

      if (!response.ok) {
        throw new Error(`Erro na API: ${response.status}`);
      }

      // Tentar interpretar como JSON
      const data = JSON.parse(responseText);
      console.log("Dados JSON recebidos:", data);

      const mappedData = data.map((empresa: any) => ({
        id: empresa.idEmpresa,
        title: empresa.razaoSocialEmpresa,
        description: empresa.descricaoEmpresa,
        img_src: empresa.imagemEmpresa.includes("drive.google.com")
          ? `https://drive.google.com/uc?id=${empresa.imagemEmpresa.split("/d/")[1].split("/view")[0]}`
          : empresa.imagemEmpresa,
        qtd_comments: 0,
        qtd_views: 0,
      }));

      setEmpresas(mappedData);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      setError("Erro ao carregar empresas. Verifique a API.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmpresas();
  }, []);

  if (loading) return <p>Carregando dados...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className={postsStyles.Posts}>
      <div className={postsStyles.Aviso}>
        <p>
          <strong>Aviso:</strong> Os dados apresentados nesta página são para fins acadêmicos.
        </p>
      </div>

      {empresas.map((empresa) => (
        <Post
          key={empresa.id}
          title={empresa.title}
          description={empresa.description}
          img_src={empresa.img_src}
          qtd_comments={empresa.qtd_comments}
          qtd_views={empresa.qtd_views}
        />
      ))}
    </div>
  );
};
