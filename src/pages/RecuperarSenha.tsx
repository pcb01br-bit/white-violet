import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const RecuperarSenha = () => {
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const handleRecuperar = () => {
    if (!email) {
      setMensagem("Por favor, insira um e-mail válido.");
      return;
    }

    setMensagem(`Instruções de recuperação foram enviadas para: ${email}`);
    setEmail("");
  };

  return (
    <div
      style={{
        padding: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src="/logo.png"
        alt="Logo"
        style={{ width: 120, marginBottom: 20 }}
      />
      <h1 style={{ marginBottom: 10 }}>Recuperar Senha</h1>
      <p style={{ marginBottom: 20 }}>
        Digite seu e-mail cadastrado e enviaremos instruções.
      </p>

      <input
        type="email"
        placeholder="Seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          padding: 10,
          width: "100%",
          maxWidth: 300,
          marginBottom: 10,
          border: "1px solid #ccc",
          borderRadius: 8,
        }}
      />

      <button
        onClick={handleRecuperar}
        style={{
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: 8,
          cursor: "pointer",
          marginBottom: 10,
        }}
      >
        Enviar
      </button>

      {mensagem && (
        <div
          style={{
            backgroundColor: "#e0f7fa",
            color: "#007BFF",
            padding: 10,
            borderRadius: 8,
            maxWidth: 300,
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          {mensagem}
        </div>
      )}

      <button
        onClick={() => navigate("/")}
        style={{
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          padding: "8px 16px",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <FaArrowLeft /> Voltar ao Login
      </button>
    </div>
  );
};

export default RecuperarSenha;
