import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBed, FaMapMarkedAlt, FaTags, FaCubes } from "react-icons/fa";

const CadastroPacotes: React.FC = () => {
  const navigate = useNavigate();

  const botoes = [
    {
      label: "Quartos",
      icon: <FaBed size={30} color="#00bfff" />,
      rota: "/pacotes/quartos",
    },
    {
      label: "Passeios",
      icon: <FaMapMarkedAlt size={30} color="#00bfff" />,
      rota: "/pacotes/passeios",
    },
    {
      label: "Promoções",
      icon: <FaTags size={30} color="#00bfff" />,
      rota: "/pacotes/promocoes",
    },
    {
      label: "Combo Personalizado",
      icon: <FaCubes size={30} color="#00bfff" />,
      rota: "/pacotes/combo",
    },
  ];

  return (
    <div style={styles.container}>
      <img src="/logo.png" alt="Logo" style={styles.logo} />
      <h1 style={styles.titulo}>Cadastro de Pacotes</h1>
      <p style={styles.subtitulo}>Gerencie os pacotes disponíveis para venda</p>

      <div style={styles.grid}>
        {botoes.map((botao, index) => (
          <div
            key={index}
            onClick={() => navigate(botao.rota)}
            style={styles.botao}
          >
            <div style={styles.icone}>{botao.icon}</div>
            <span style={styles.texto}>{botao.label}</span>
          </div>
        ))}
      </div>

      <button
        style={styles.voltar}
        onClick={() => navigate("/admin-dashboard")}
      >
        Voltar
      </button>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: 30,
    backgroundColor: "#fff",
    borderRadius: 20,
    fontFamily: "Segoe UI",
    boxShadow: "0 0 20px #00bfff",
    minHeight: "100vh",
    textAlign: "center",
  },
  logo: {
    width: "120px",
    marginBottom: 10,
  },
  titulo: {
    color: "#00bfff",
    fontSize: "26px",
    textShadow: "0 0 5px #00bfff",
  },
  subtitulo: {
    color: "#555",
    marginBottom: 30,
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    gap: 40,
    flexWrap: "wrap",
    marginTop: 20,
  },
  botao: {
    backgroundColor: "#f0faff",
    borderRadius: "50%",
    border: "3px solid #00bfff",
    width: 120,
    height: 120,
    boxShadow: "0 0 10px #00bfff",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "transform 0.2s",
  },
  icone: {
    marginBottom: 6,
  },
  texto: {
    color: "#007acc",
    fontWeight: "bold",
    fontSize: "14px",
    marginTop: 4,
  },
  voltar: {
    marginTop: 30,
    backgroundColor: "#aaa",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: 10,
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default CadastroPacotes;
