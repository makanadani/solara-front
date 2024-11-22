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

  // Função para buscar dados da API
  const fetchEmpresas = async () => {
    try {
      const response = await fetch("https://c2e8-2804-7f0-b300-8dca-ee9a-9770-bcd6-e484.ngrok-free.app/solara-java/rest/empresas");
      if (!response.ok) throw new Error(`Erro: ${response.status}`);
      
      // Obter dados da API
      const data = await response.json();

      // Mapeando dados para corresponder aos campos esperados pelo componente Post
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
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  // Carregar dados ao montar o componente
  useEffect(() => {
    fetchEmpresas();
  }, []);

  return (
    <div className={postsStyles.Posts}>
      <div className={postsStyles.Aviso}>
        <p>
          <strong>Aviso:</strong> Os dados apresentados nesta página são para fins acadêmicos e foram obtidos de fontes públicas, não representando parcerias reais com as empresas mencionadas.
        </p>
      </div>

      {empresas.length > 0 ? (
        empresas.map((empresa) => (
          <Post
            key={empresa.id}
            title={empresa.title}
            description={empresa.description}
            img_src={empresa.img_src}
            qtd_comments={empresa.qtd_comments}
            qtd_views={empresa.qtd_views}
          />
        ))
      ) : (
        <p>Carregando dados...</p>
      )}
    </div>
  );
};
