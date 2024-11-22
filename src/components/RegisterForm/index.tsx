"use client";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useState } from "react";
import styles from "./style.module.css";

export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    cnpj: "",
    password: "",
    imageUrl: "",
    description: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const { companyName, cnpj, password, imageUrl, description } = formData;

    if (!companyName || !cnpj || !password || !imageUrl || !description) {
      setErrorMessage("Todos os campos são obrigatórios.");
      return;
    }

    try {
      const response = await fetch(
        "https://87a1-2804-7f0-b300-8dca-ee9a-9770-bcd6-e484.ngrok-free.app/solara-java/rest/empresas",
        {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          razaoSocialEmpresa: companyName,
          cnpjEmpresa: cnpj,
          senhaEmpresa: password,
          imagemEmpresa: imageUrl,
          descricaoEmpresa: description,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao registrar a empresa.");
      }

      setSuccessMessage("Empresa registrada com sucesso!");
      setTimeout(() => (window.location.href = "/"), 2000);
    } catch (error) {
      setErrorMessage("Erro ao registrar a empresa. Verifique os dados.");
    }
  };

  return (
    <div className={styles.RegisterFormContainer}>
      <h1>Criar Conta</h1>
      <p>Preencha os campos abaixo para registrar sua empresa.</p>
      <form onSubmit={handleSubmit} className={styles.FormContainer}>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

        <div className={styles.field}>
          <label htmlFor="companyName">
            <FaArrowLeftLong /> Nome da Empresa
          </label>
          <input
            type="text"
            id="companyName"
            placeholder="Insira o nome da empresa"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>

        <div className={styles.field} style={{ marginTop: "1rem" }}>
          <label htmlFor="cnpj">
            <FaArrowLeftLong /> CNPJ
          </label>
          <input
            type="text"
            id="cnpj"
            placeholder="Insira o CNPJ da sua empresa"
            value={formData.cnpj}
            onChange={handleChange}
          />
        </div>

        <div className={styles.field} style={{ marginTop: "1rem" }}>
          <label htmlFor="password">
            <FaArrowLeftLong /> Senha
          </label>
          <input
            type="password"
            id="password"
            placeholder="Insira uma senha segura"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className={styles.field} style={{ marginTop: "1rem" }}>
          <label htmlFor="imageUrl">
            <FaArrowLeftLong /> URL da Imagem
          </label>
          <input
            type="text"
            id="imageUrl"
            placeholder="Insira a URL da imagem"
            value={formData.imageUrl}
            onChange={handleChange}
          />
        </div>

        <div className={styles.field} style={{ marginTop: "1rem" }}>
          <label htmlFor="description">
            <FaArrowLeftLong /> Descrição
          </label>
          <input
            type="text"
            id="description"
            placeholder="Insira a descrição da sua empresa"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Cadastrar-se
        </button>
      </form>

      <a href="/">
        <button style={{ color: "green" }}>
          <u>Já tem uma conta? Faça login aqui!</u>
        </button>
      </a>
    </div>
  );
};
