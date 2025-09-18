import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUsers,
  FaBoxOpen,
  FaChartBar,
  FaMoneyBill,
  FaCog,
  FaHistory,
} from "react-icons/fa";

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  const botoes = [
    { label: "Funcionários", icon: <FaUsers />, rota: "/cadastro-funcionario" },
    { label: "Pacotes", icon: <FaBoxOpen />, rota: "/cadastro-pacotes" },
    { label: "Relatórios", icon: <FaChartBar />, rota: "/relatorios" },
    { label: "Pagamentos", icon: <FaMoneyBill />, rota: "/pagamentos" },
    { label: "Configurações", icon: <FaCog />, rota: "/configuracoes" },
    {
      label: "Histórico",
      icon: <FaHistory />,
      rota: "/relatorios/funcionarios",
    },
  ];

  return (
    <div style={styles.container}>
      <img src="/logo.png" alt="Logo" style={styles.logo} />
      <h1 style={styles.titulo}>Painel do Administrador</h1>
      <p style={styles.subtitulo}>Gerencie sua pousada com facilidade</p>

      <div style={styles.grid}>
        {botoes.map((btn) => (
          <button
            key={btn.label}
            style={styles.botao}
            onClick={() => navigate(btn.rota)}
          >
            <div style={styles.icone}>{btn.icon}</div>
            <div style={styles.texto}>{btn.label}</div>
          </button>
        ))}
      </div>

      <button style={styles.voltar} onClick={() => navigate("/")}>
        Voltar ao Login
      </button>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: 40,
    textAlign: "center",
    fontFamily: "Segoe UI",
    backgroundColor: "#fff",
    borderRadius: 20,
    margin: "40px auto",
    maxWidth: 700,
    boxShadow: "0 0 20px #00bfff",
  },
  logo: {
    width: 100,
    marginBottom: 10,
  },
  titulo: {
    fontSize: "24px",
    color: "#00bfff",
    textShadow: "0 0 5px #00bfff",
  },
  subtitulo: {
    fontSize: "16px",
    marginBottom: 30,
    color: "#666",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
  },
  botao: {
    width: 120,
    height: 120,
    borderRadius: "50%",
    backgroundColor: "#f0faff",
    border: "2px solid #00bfff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 0 10px #00bfff",
    cursor: "pointer",
    transition: "transform 0.2s",
  },
  icone: {
    fontSize: "24px",
    color: "#007acc",
    marginBottom: 8,
  },
  texto: {
    fontSize: "14px",
    color: "#007acc",
    fontWeight: "bold",
  },
  voltar: {
    marginTop: 30,
    backgroundColor: "#00bfff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: 10,
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 0 10px #00bfff",
  },
};

export default AdminDashboard;
