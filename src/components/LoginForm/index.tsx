"use client"
import { FaArrowLeftLong } from "react-icons/fa6";
import styles from "./style.module.css";
import { useState } from "react";
 
export const LoginForm = () => {
 
  const [cnpj, setCnpj] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
 
    if (!cnpj || !password) {
      setErrorMessage("CNPJ e senha são obrigatórios.");
      return;
    }
 
    try {
      const response = await fetch("https://87a1-2804-7f0-b300-8dca-ee9a-9770-bcd6-e484.ngrok-free.app/solara-java/rest/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cnpjEmpresa: cnpj,
          senhaEmpresa: password,
        }),
      });
 
      if (!response.ok) {
        throw new Error("CNPJ ou senha inválidos.");
      }
      setSuccessMessage("Login realizado com sucesso!");
      setTimeout(() => {
        window.location.href = "/s";
      }, 1000);
    } catch (error) {
      console.error("Erro:", error);
      setErrorMessage("Erro ao realizar login. Verifique suas credenciais.");
    }
  };
 
  return (
    <div className={styles.LoginFormContainer}>
      <h1>Acessar Conta</h1>
      <p>Preencha seus dados de acesso para criar e continuar</p>
      <form onSubmit={handleSubmit} className={styles.FormContainer}>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

        <div className={styles.field}>
          <label htmlFor="cnpj">
            <FaArrowLeftLong /> CNPJ
          </label>
          <input 
          type="text" 
          id="cnpj" 
          placeholder="Insira o CNPJ da sua empresa"
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
          />
        </div>

        <div className={styles.field} style={{ marginTop: "1rem" }}>
          <label htmlFor="senha">
            <FaArrowLeftLong /> Senha
          </label>
          <input
            type="password"
            id="senha"
            placeholder="Insira a sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className={styles.submitButton}>Entrar</button>

      </form>
      
      <a href="/register">
          <button style={{color: "green"}}><u>Cadastre-se agora, caso não tenha Login!</u></button>
        </a>
    </div>
  );
};