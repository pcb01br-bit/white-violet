// src/pages/Configuracoes.tsx
import React from "react";
import BotaoVoltar from "../components/BotaoVoltar";

const Configuracoes: React.FC = () => {
  return (
    <div style={styles.container}>
      <img src="/logo.png" alt="Logo" style={styles.logo} />
      <h1 style={styles.title}>Configurações do Sistema</h1>
      <p style={styles.subtitle}>
        Somente administradores podem fazer alterações
      </p>

      <div style={styles.card}>
        <h3 style={styles.sectionTitle}>Permissões:</h3>
        <ul style={styles.list}>
          <li>Apenas o administrador pode editar valores de pacotes</li>
          <li>Apenas o administrador pode adicionar fotos e passeios</li>
          <li>Vendedores só têm acesso à área de vendas</li>
        </ul>
      </div>

      <div style={styles.card}>
        <h3 style={styles.sectionTitle}>Outros ajustes:</h3>
        <p>
          Futuramente você poderá alterar temas, notificações e idioma aqui.
        </p>
      </div>

      <BotaoVoltar />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: 40,
    fontFamily: "Segoe UI, sans-serif",
    backgroundColor: "#fff",
    minHeight: "100vh",
    textAlign: "center",
    boxShadow: "0 0 20px #00bfff",
    borderRadius: "20px",
  },
  logo: {
    width: 150,
    marginBottom: 10,
  },
  title: {
    fontSize: "1.8em",
    color: "#00bfff",
    fontWeight: "bold",
    textShadow: "0 0 6px #00bfff",
    marginBottom: 5,
  },
  subtitle: {
    color: "#444",
    marginBottom: 30,
  },
  sectionTitle: {
    color: "#0077cc",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#f1f9ff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 0 10px #00bfff",
    maxWidth: 500,
    margin: "0 auto 30px auto",
  },
  list: {
    textAlign: "left",
    marginTop: 10,
    paddingLeft: 20,
    color: "#333",
  },
};

export default Configuracoes;
