import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [senha, setSenha] = useState("");
  const [tipo, setTipo] = useState("admin");

  const handleLogin = () => {
    if (senha !== "1234") {
      alert("Senha incorreta. A senha padrão é: 1234");
      return;
    }

    if (tipo === "admin") {
      navigate("/admin-dashboard");
    } else {
      navigate("/vendedor-dashboard");
    }
  };

  return (
    <div style={styles.container}>
      <img src="/logo.png" alt="Logo" style={styles.logo} />
      <h1 style={styles.titulo}>Login</h1>

      <select
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        style={styles.select}
      >
        <option value="admin">Administrador</option>
        <option value="vendedor">Vendedor</option>
      </select>

      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        style={styles.input}
      />

      <button onClick={handleLogin} style={styles.botao}>
        Entrar
      </button>

      <div style={styles.links}>
        <p style={styles.link} onClick={() => navigate("/recuperarsenha")}>
          Esqueci minha senha
        </p>
        <p style={styles.link} onClick={() => navigate("/sobre")}>
          Sobre o sistema
        </p>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    textAlign: "center",
    fontFamily: "Segoe UI",
    boxShadow: "0 0 20px #00bfff",
    maxWidth: 400,
    margin: "60px auto",
  },
  logo: {
    width: "140px",
    marginBottom: 20,
  },
  titulo: {
    fontSize: "24px",
    color: "#00bfff",
    marginBottom: 20,
    textShadow: "0 0 4px #00bfff",
  },
  select: {
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    width: "100%",
    border: "1px solid #ccc",
  },
  input: {
    padding: 10,
    borderRadius: 8,
    border: "1px solid #ccc",
    marginBottom: 15,
    width: "100%",
  },
  botao: {
    backgroundColor: "#00bfff",
    color: "#fff",
    padding: "10px 24px",
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
    fontSize: 16,
    fontWeight: "bold",
    boxShadow: "0 0 10px #00bfff",
  },
  links: {
    marginTop: 20,
  },
  link: {
    color: "#007acc",
    cursor: "pointer",
    marginBottom: 6,
    textDecoration: "underline",
  },
};

export default Login;
